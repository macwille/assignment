import axios from 'axios'
import { API_URL } from '../config'

const baseUrl = API_URL + '/products'

const getBeanies = async () => {
  const response = await axios.get(baseUrl + '/beanies')
  return response.then((res) => res.data)
}

const getGloves = async () => {
  const response = await axios.get(baseUrl + '/gloves')
  return response.then((res) => res.data)
}

const getMasks = async () => {
  const response = await axios.get(baseUrl + '/facemasks')
  return response.then((res) => res.data)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getBeanies, getGloves, getMasks }