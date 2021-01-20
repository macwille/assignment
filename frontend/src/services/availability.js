import axios from 'axios'
import { API_URL } from '../config'

const baseUrl = API_URL + '/availability'

const getAvailability = (id, manufacturer) => {
  const request = axios.get(baseUrl + '/' + manufacturer + '/' + id)
  return request.then(res => res.data)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAvailability }