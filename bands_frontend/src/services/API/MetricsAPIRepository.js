import axios from 'axios'

const BASE_URL = `${process.env.VUE_APP_BANDS_API_URL}/metric/`

export default {
  async index () {
    return axios.get(BASE_URL)
  }
};
