import { Metric, NewMetric } from '@/types/metrics'
import axios from 'axios'
import { MetricResponse, MetricsRepositrory } from '../metrics';

const BASE_URL = `${process.env.VUE_APP_BANDS_API_URL}/metric/`

export class MetricsAPIRepository implements MetricsRepositrory {
  async index (): Promise<MetricResponse[]> {
    return (await axios.get(BASE_URL)).data
  }
  async create (metric: NewMetric): Promise<MetricResponse> {
    return (await axios.post(BASE_URL, metric)).data
  }
}
