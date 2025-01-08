import MetricsAPIRepository from '@/services/API/MetricsAPIRepository'
import {defineStore} from 'pinia'

export const useMetrics = defineStore('metrics', {
    state: () => ({
      metrics: [],
    }),
    actions: {
      async fetchMetrics() {
        try {
          MetricsAPIRepository
            .index()
            .then(response => {
              this.metrics = response.data
            })
          
          return Promise.resolve() 
        } catch (error) {
          return Promise.reject(error)
        }
      },
      async addMetric(metric) {
        try {
          await MetricsAPIRepository
            .create(metric)
            .then(response => {
              this.metrics.push(response.data)
            })
            
          return Promise.resolve()
        } catch (error) {
          return Promise.reject(error)
        }
      }
    }
})
