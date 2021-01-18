import axios from 'axios'
import { API_URL } from '../config'

const baseUrl = API_URL + '/products'

const getBeanies = async () => {
  const result = await axios.get(baseUrl + '/beanies').then((res) => res.data)
  return result
}

const getGloves = async () => {
  const result = await axios.get(baseUrl + '/gloves').then((res) => res.data)
  return result
}

const getMasks = async () => {
  const result = await axios.get(baseUrl + '/facemasks').then((res) => res.data)
  return result
}


export default { getBeanies, getGloves, getMasks }