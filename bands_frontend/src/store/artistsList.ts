import { ArtistsAPIRepository } from '@/services/repositories/API/artistsAPIRepository'
import { ScoresAPIRepository } from '@/services/repositories/API/scoresAPIRepository'
import { ArtistResponse, ArtistScoreResponse, ArtistsRepository } from '@/services/repositories/artists'
import { ArtistsDemoRepository } from '@/services/repositories/demo/artistsDemoRepository'
import { ARTISTS, METRICS, SCORES } from '@/services/repositories/demo/data'
import { DemoDB } from '@/services/repositories/demo/db'
import { ScoresDemoRepository } from '@/services/repositories/demo/scoresDemoRepository'
import { ScoresRepository } from '@/services/repositories/scores'
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
    newScores: [],
    rating: response.rating,
    imageUrl: response.image_url,
    linkUrl: response.link_url
  }
}


let artistsRepository: ArtistsRepository
let scoresRepository: ScoresRepository
if (process.env.VUE_APP_DEMO === 1) {
  const db = new DemoDB(ARTISTS, METRICS, SCORES)
  artistsRepository = new ArtistsDemoRepository(db)
  scoresRepository = new ScoresDemoRepository(db)
} else {
  artistsRepository = new ArtistsAPIRepository()
  scoresRepository = new ScoresAPIRepository()
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
        const artistsPage = await artistsRepository.index(1, name, scoreFilters)
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

        const artistPage = await artistsRepository.index(this.page, this.query, this.scoreFilters ?? [])
        artistPage.results.forEach((artist) => {this.artistsMap.set(artist.id, artistReponseToModel(artist))})
        this.page = artistPage.next === null ? null : (this.page ?? 0) + 1 
      },
      async addArtist(artist: Artist) {
        const createdArtist = await artistsRepository.create(artist);
        
        const artistId: number = createdArtist.id
        artist.id = artistId

        await scoresRepository.upsertBulk(artist)

        const retrievedArtist = await artistsRepository.retrieve(artistId)
        this.artistsMap.set(artistId, artistReponseToModel(retrievedArtist))
      },
      async updateArtist(artist: Artist, scoreIdsToDelete: number[]) {
        const updatedArtist = await artistsRepository.update(artist)
        
        await scoresRepository.upsertBulk(artist)

        for (const scoreId of scoreIdsToDelete) {
          await scoresRepository.destroy(scoreId)
        }

        const retrievedArtist = await artistsRepository.retrieve(updatedArtist.id)
        this.artistsMap.set(updatedArtist.id, artistReponseToModel(retrievedArtist))
      },
      async fetchSimilarArtists(artistId: number) {
        const similarArtists = await artistsRepository.getSimilar(artistId)
        this.artistsMap = new Map<number, Artist>()
        similarArtists.forEach((artist) => { this.artistsMap.set(artist.id, artistReponseToModel(artist)) })

        this.page = null

        this.query = ""
        this.scoreFilters = []
      },
    }
})
