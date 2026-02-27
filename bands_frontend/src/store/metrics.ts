import metricsAPIRepository, { MetricResponse } from '@/services/API/metricsAPIRepository'
import { Metric, MetricType, NewMetric } from '@/types/metrics'
import {defineStore} from 'pinia'
import { usePageStatus } from './pageStatus'
import { getColor } from '@/utils'


function metricResponseToModel(response: MetricResponse, color: string): Metric {
  return {
    id: response.id,
    name: response.name,
    type: response.type == 'flag' ? MetricType.flag : MetricType.value,
    category: response.category,
    color
  }
}


export const useMetrics = defineStore('metrics', {
    state: () => ({
      metrics: [] as Metric[],
    }),
    actions: {
      async fetchMetrics() {
        const colorOffset = usePageStatus().colorOffset
        this.metrics = (await metricsAPIRepository.index()).map((metric, index) => metricResponseToModel(metric, getColor(index, colorOffset)))
      },
      async addMetric(metric: NewMetric): Promise<Metric> {
        const colorOffset = usePageStatus().colorOffset
        const createdMetric = await metricsAPIRepository.create(metric)
        this.metrics.push(metricResponseToModel(createdMetric, getColor(this.metrics.length, colorOffset)))
        return this.metrics[this.metrics.length - 1]
      }
    }
})
