import { MetricsAPIRepository } from '@/services/repositories/API/metricsAPIRepository'
import { Metric, MetricType, NewMetric } from '@/types/metrics'
import {defineStore} from 'pinia'
import { usePageStatus } from './pageStatus'
import { getColor } from '@/utils'
import { MetricResponse, MetricsRepositrory } from '@/services/repositories/metrics'
import { MetricsDemoRepository } from '@/services/repositories/demo/metricsDemoRepository'
import { DemoDB } from '@/services/repositories/demo/db'
import { ARTISTS, METRICS, SCORES } from '@/services/repositories/demo/data'


function metricResponseToModel(response: MetricResponse, color: string): Metric {
  return {
    id: response.id,
    name: response.name,
    type: response.type == 'flag' ? MetricType.flag : MetricType.value,
    category: response.category,
    color
  }
}

let repository: MetricsRepositrory
if (process.env.VUE_APP_DEMO === 1) {
  const db = new DemoDB(ARTISTS, METRICS, SCORES)
  repository = new MetricsDemoRepository(db)
} else {
  repository = new MetricsAPIRepository()
}

export const useMetrics = defineStore('metrics', {
    state: () => ({
      metrics: [] as Metric[],
    }),
    actions: {
      async fetchMetrics() {
        const colorOffset = usePageStatus().colorOffset
        this.metrics = (await repository.index()).map((metric, index) => metricResponseToModel(metric, getColor(index, colorOffset)))
      },
      async addMetric(metric: NewMetric): Promise<Metric> {
        const colorOffset = usePageStatus().colorOffset
        const createdMetric = await repository.create(metric)
        this.metrics.push(metricResponseToModel(createdMetric, getColor(this.metrics.length, colorOffset)))
        return this.metrics[this.metrics.length - 1]
      }
    }
})
