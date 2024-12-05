import ArtistsAPIRepository from '@/services/API/ArtistsAPIRepository'
import {defineStore} from 'pinia'

export const useArtistsList = defineStore('artists-list', {
    state: () => ({
        artists: [],
        page: 1,
        query: ""
    }),
    actions: {
      async fetchArtists(name, metrics) {
        try {
          await ArtistsAPIRepository
            .index(1, name, metrics)
            .then(response => {
              this.artists = response.data.results

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
              this.artists.push(...response.data.results)
              
              this.page = response.data.next === null ? null : this.page + 1 
            })
            
          return Promise.resolve()
        } catch (error) {
          return Promise.reject(error)
        }
      }
    }
})
