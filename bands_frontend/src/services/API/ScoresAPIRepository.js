import axios from 'axios'

const BASE_URL = `${process.env.VUE_APP_BANDS_API_URL}/score/`

export default {
  async create (artistId, metricId, value) {
    return axios.post(BASE_URL, {"artist_id": artistId, "metric_id": metricId, "value": value})
  },
  async update (id, value) {
    return axios.put(`${BASE_URL}${id}/`, {"value": value})
  },
  async destroy (id) {
    return axios.delete(`${BASE_URL}${id}/`)
  }
};
