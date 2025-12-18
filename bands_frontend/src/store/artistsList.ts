import artistsAPIRepository, { ArtistResponse, ArtistScoreResponse } from '@/services/API/artistsAPIRepository'
import scoresAPIRepository from '@/services/API/scoresAPIRepository'
import { Artist } from '@/types/artist'
import { MetricType } from '@/types/metrics'
import { ScoreFilter } from '@/types/score'
import {defineStore} from 'pinia'


function artistReponseToModel(response: ArtistResponse): Artist {
  return {
    id: response.id,
    name: response.name,
    scores: response.scores.map((score: ArtistScoreResponse) => { return {
      id: score.id,
      metric: score.metric,
      type: score.type === "value" ? MetricType.value : MetricType.flag,
      artistId: response.id,
      value: score.value
    } }),
    rating: response.rating,
    imageUrl: response.image_url,
    linkUrl: response.link_url
  }
}


export const useArtistsList = defineStore('artists-list', {
    state: () => ({
        artistsMap: new Map<number, Artist>(),
        page: 1 as number | null,
        query: "" as string,
        scoreFilters: undefined as ScoreFilter[] | undefined
    }),
    getters: {
      artists: (state) => Array.from(state.artistsMap.values()),
    },
    actions: {
      async fetchArtists(name: string, scoreFilters: ScoreFilter[]) {
        const artistsPage = await artistsAPIRepository.index(1, name, scoreFilters)
        this.artistsMap = new Map<number, Artist>()
        artistsPage.results.forEach((artist) => { this.artistsMap.set(artist.id, artistReponseToModel(artist)) })

        this.page = artistsPage.next === null ? null : 2 

        this.query = name
        this.scoreFilters = scoreFilters
      },
      async fetchArtistsPage() {
        if (this.page === null) {
          return
        }

        const artistPage = await artistsAPIRepository.index(this.page, this.query, this.scoreFilters ?? [])
        artistPage.results.forEach((artist) => {this.artistsMap.set(artist.id, artistReponseToModel(artist))})
        this.page = artistPage.next === null ? null : (this.page ?? 0) + 1 
      },
      async addArtist(artist: Artist) {
        const createdArtist = await artistsAPIRepository.create(artist);
        
        const artistId: number = createdArtist.id
        artist.id = artistId

        await scoresAPIRepository.upsertBulk(artist)

        const retrievedArtist = await artistsAPIRepository.retrieve(artistId)
        this.artistsMap.set(artistId, artistReponseToModel(retrievedArtist))
      },
      async updateArtist(artist: Artist, scoreIdsToDelete: number[]) {
        const updatedArtist = await artistsAPIRepository.update(artist)
        
        await scoresAPIRepository.upsertBulk(artist)

        for (const scoreId of scoreIdsToDelete) {
          await scoresAPIRepository.destroy(scoreId)
        }

        const retrievedArtist = await artistsAPIRepository.retrieve(updatedArtist.id)
        this.artistsMap.set(updatedArtist.id, artistReponseToModel(retrievedArtist))
      }
    }
})
