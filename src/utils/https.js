import axios from 'axios'

const instance = axios.create(
  {
    baseURL: "https://cinta-negra-b46-allimacse.herokuapp.com/api/v1/"
  }
)

export const setAuthToken = token => {
  if (token) {
    instance.defaults.headers.Authorization= `Bearer ${token}`
  } else {
    delete instance.defaults.headers.common['Authorization']
  }
}

export const auth = {
  signup: body => instance.post('/signup', body),
  login: body => instance.post('/login', body),
}

export const users = {
  findOne: id => instance.get(`/users/${id}`)
}