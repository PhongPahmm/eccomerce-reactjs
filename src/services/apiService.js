import axios from 'axios'

const postLogin = (username, password) => {
    return axios.post('http://localhost:8080/identity/auth/token', { username, password })
}

export { postLogin }