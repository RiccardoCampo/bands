import { Artist } from '@/types/artist'
import axios from 'axios'

const BASE_URL = `${process.env.VUE_APP_BANDS_API_URL}/score/`


export type ScoreResponse = {
  artist: number
  metric: number
  value: number
}


export default {
  async create (artistId: number, metricId: number, value: number): Promise<ScoreResponse> {
    return (await axios.post(BASE_URL, {"artist_id": artistId, "metric_id": metricId, "value": value})).data
  },
  async update (id: number, value: number): Promise<ScoreResponse> {
    return (await axios.put(`${BASE_URL}${id}/`, {"value": value})).data
  },
  async upsertBulk (artist: Artist) { 
    const updates = []
    for (const score of artist.scores) {
      updates.push({
        id: score.id,
        value: score.value
      })
    }
    for (const score of artist.newScores) {
      updates.push({
        metric_id: score.metricId,
        artist_id: artist.id,
        value: score.value
      })
    }
    await axios.put(`${BASE_URL}bulk-upsert/`, {updates})
  },
  async destroy (id: number) {
    await axios.delete(`${BASE_URL}${id}/`)
  }
};
