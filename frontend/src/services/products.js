import axios from 'axios'
import { API_URL } from '../config'

const baseUrl = API_URL + '/products'

const getBeanies = () => {
  const request = axios.get(baseUrl + '/beanies')
  return request.then(res => res.data)
}

const getGloves = () => {
  const request = axios.get(baseUrl + '/gloves')
  return request.then(res => res.data)
}

const getMasks = () => {
  const request = axios.get(baseUrl + '/facemasks')
  return request.then(res => res.data)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getBeanies, getGloves, getMasks }