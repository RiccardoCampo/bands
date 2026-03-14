import { NewMetric } from "@/types/metrics"

export type MetricResponse = {
  id: number
  name: string
  type: string
  category: string
}

export interface MetricsRepositrory {
  index (): Promise<MetricResponse[]>
  create (metric: NewMetric): Promise<MetricResponse>
}
