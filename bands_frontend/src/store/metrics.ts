import metricsAPIRepository, { MetricResponse } from '@/services/API/metricsAPIRepository'
import { Metric, MetricType, NewMetric } from '@/types/metrics'
import {defineStore} from 'pinia'


function metricResponseToModel(response: MetricResponse): Metric {
  return {
    id: response.id,
    name: response.name,
    type: response.type == 'flag' ? MetricType.flag : MetricType.value,
    category: response.category
  }
}


export const useMetrics = defineStore('metrics', {
    state: () => ({
      metrics: [] as Metric[],
    }),
    actions: {
      async fetchMetrics() {
        this.metrics = (await metricsAPIRepository.index()).map(metricResponseToModel)
      },
      async addMetric(metric: NewMetric): Promise<Metric> {
        const createdMetric = await metricsAPIRepository.create(metric)
        this.metrics.push(metricResponseToModel(createdMetric))
        return this.metrics[this.metrics.length - 1]
      }
    }
})
