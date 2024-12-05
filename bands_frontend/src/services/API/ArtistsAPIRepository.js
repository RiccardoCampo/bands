import axios from 'axios'

const BASE_URL = `${process.env.VUE_APP_BANDS_API_URL}/artist/`

export default {
  async index (page, name, metrics) {
    let queryString = `page=${page}`

    if (name)
      queryString += `&name=${name}`

    if (metrics)
      metrics.forEach(metric => {
        if (metric.type == "value")
          queryString += `&${metric.name}=[${metric.value[0]},${metric.value[1]}]`
        else
          queryString += `&${metric.name}=${metric.value}`
      });

    console.log(queryString)

    return axios.get(`${BASE_URL}?${queryString}`)
  }
};
