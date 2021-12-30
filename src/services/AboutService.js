import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'http://localhost:8888',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

const apiVersion = '/api/v1'

export default {
    getAbout(type = "") {
        if (type === "") {
            return apiClient.get(apiVersion + '/about')
        }
        return apiClient.get(apiVersion + '/about/' + type)
    }
}