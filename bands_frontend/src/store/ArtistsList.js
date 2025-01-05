import ArtistsAPIRepository from '@/services/API/ArtistsAPIRepository'
import ScoresAPIRepository from '@/services/API/ScoresAPIRepository'
import {defineStore} from 'pinia'

export const useArtistsList = defineStore('artists-list', {
    state: () => ({
        artistsMap: new Map(),
        page: 1,
        query: ""
    }),
    getters: {
      artists: (state) => Array.from(state.artistsMap.values()),
    },
    actions: {
      async fetchArtists(name, metrics) {
        try {
          await ArtistsAPIRepository
            .index(1, name, metrics)
            .then(response => {
              response.data.results.forEach((artist) => {this.artistsMap.set(artist.id, artist)})

              console.log(response.data.results)

              this.page = response.data.next === null ? null : 2 
            })

          this.query = name
            
          return Promise.resolve()
        } catch (error) {
          return Promise.reject(error)
        }
      },
      async fetchArtistsPage() {
        if (this.page === null) {
          return
        }

        try {
          await ArtistsAPIRepository
            .index(this.page, this.query)
            .then(response => {
              response.data.results.forEach((artist) => {this.artistsMap.set(artist.id, artist)})
              
              this.page = response.data.next === null ? null : this.page + 1 
            })
            
          return Promise.resolve()
        } catch (error) {
          return Promise.reject(error)
        }
      },
      async addArtist(artist) {
        try {
          var artistId

          await ArtistsAPIRepository
            .create(artist)
            .then(response => {
              artistId = response.data.id
            })

          for (const score of artist.scores) {
            await ScoresAPIRepository.create(artistId, score.metricId, score.value)
          }

          await ArtistsAPIRepository.retrieve(artistId).then(response => {
            this.artistsMap.set(artistId, response.data)
          })
            
          return Promise.resolve()
        } catch (error) {
          return Promise.reject(error)
        }
      },
      async updateArtist(artist) {
        try {
          await ArtistsAPIRepository.update(artist)
          
          for (const score of artist.scores) {
            if (score.id !== undefined)
              await ScoresAPIRepository.update(score.id, score.value)
            else
              await ScoresAPIRepository.create(artist.id, score.metricId, score.value)
          }
  
          this.artistsMap.set(artist.id, artist)
            
          return Promise.resolve()
        } catch (error) {
          return Promise.reject(error)
        }
      }
    }
})
