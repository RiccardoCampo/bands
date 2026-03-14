import { ScoreFilter } from "@/types/score";
import { ArtistResponse, ArtistsPage, ArtistsRepository } from "../artists";
import { Artist } from "@/types/artist";
import { DemoDB } from "./db";
import { MetricType } from "@/types/metrics";


const PAGE_SIZE = 10

export class ArtistsDemoRepository implements ArtistsRepository {
  db: DemoDB

  constructor (db: DemoDB) {
    this.db = db
  }

  async index (page: number, name: string, scoreFilters: ScoreFilter[]): Promise<ArtistsPage> {
    const filteredResults = Object.values(this.db.artists).filter(
      (artist) => {
        let isSelected = true
        const scoresByMetricName: Map<string, number> = new Map(artist.scores.map((score) => [score.metric, score.value]))
        scoreFilters.forEach(
          (scoreFilter) => {
            const scoreValue = scoresByMetricName.get(scoreFilter.metric.name)
            isSelected = isSelected && scoreValue !== undefined && (
              scoreFilter.metric.type === MetricType.flag || 
              (scoreFilter.metric.type === MetricType.value && scoreValue <= scoreFilter.filterValues.maxValue && scoreValue >= scoreFilter.filterValues.minValue)
            )
          }
        )
        return (name === "" || artist.name.toLowerCase().includes(name.toLowerCase())) && isSelected
      }
    ).sort((a, b) => (5-a.rating + a.name).localeCompare((5-b.rating + b.name)))

    return {
      results: filteredResults.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE),
      next: (page - 1) * PAGE_SIZE > filteredResults.length ? null : page + 1
    }
  }

  async retrieve (id: number): Promise<ArtistResponse> {
    return this.db.artists[id]
  }

  async create (artist: Artist): Promise<ArtistResponse> {
    const newId = Object.keys(this.db.artists).length
    this.db.artists[newId] = {
      id: newId,
      name: artist.name,
      link_url: artist.linkUrl ?? "",
      image_url: artist.imageUrl ?? "",
      rating: artist.rating,
      created_at: new Date(),
      scores: []
    }
    return this.db.artists[newId]
  }

  async update (artist: Artist): Promise<ArtistResponse> {
    const artistId = artist.id ?? 0
    this.db.artists[artistId] = {
      ...this.db.artists[artistId],
      name: artist.name,
      link_url: artist.linkUrl ?? "",
      image_url: artist.imageUrl ?? "",
      rating: artist.rating,
    }
    
    return this.db.artists[artistId]
  }

  async getSimilar (artistId: number): Promise<ArtistResponse[]> {
    const targetArtist = this.db.artists[artistId]
    const targetArtistScoreMap = new Map(targetArtist.scores.map((score) => [score.metric, score.value]))
    const artistsSimilarities: {artist: ArtistResponse, similarityScore: number}[] = []
    Object.values(this.db.artists).forEach(
      (artist) => {
        if (artist.id !== artistId) {
          let similarityScore = 0
          artist.scores.forEach(
            (score) => {
              const targetScoreValue = targetArtistScoreMap.get(score.metric)
              if (targetScoreValue !== undefined)
                similarityScore += score.type === MetricType.flag ? 8 : Math.pow(2, 4 - Math.abs(targetScoreValue - score.value))
            }
          )
          artistsSimilarities.push({artist, similarityScore})
        }
      }
    )
    return artistsSimilarities.sort((a, b) => b.similarityScore - a.similarityScore).slice(0, 10).map((obj) => obj.artist)
  }
}