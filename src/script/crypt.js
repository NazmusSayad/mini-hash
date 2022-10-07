import axios from 'axios'

export const encode = async (data, salt) => {
  const res = await axios.post('/api/encode', { data, salt })
  return res?.data?.data
}

export const decode = async (data, salt) => {
  const res = await axios.post('/api/decode', { data, salt })
  return res?.data?.data
}

export const attack = async (data, password, depth) => {
  const res = await axios.post('/api/attack', { data, password, depth })
  return res?.data?.data
}
