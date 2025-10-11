import { Metric, NewMetric } from '@/types/metrics'
import axios from 'axios'

const BASE_URL = `${process.env.VUE_APP_BANDS_API_URL}/metric/`


export type MetricResponse = {
  id: number
  name: string
  type: string
  category: string
}

export default {
  async index (): Promise<MetricResponse[]> {
    return (await axios.get(BASE_URL)).data
  },
  async create (metric: NewMetric): Promise<MetricResponse> {
    return (await axios.post(BASE_URL, metric)).data
  }
};
