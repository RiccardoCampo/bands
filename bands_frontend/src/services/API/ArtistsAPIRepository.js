import axios from 'axios'

const BASE_URL = `${process.env.VUE_APP_BANDS_API_URL}/artist`

export default {
  async index (page, name) {
    let queryString = `page=${page}`

    if (name) {
      queryString += `&name=${name}`
    }

    return axios.get(`${BASE_URL}?${queryString}`)
  }
};
