import axios from 'axios'

let base_url = "http://localhost:5000/api/auth"

export const registerApi = async (payload) => {
    return  axios.post(`${base_url}/register`,payload).then(res=> res.data).catch(err=> err)
}
export const loginApi = async (payload) => {
    return  axios.post(`${base_url}/login`,payload).then(res=> res.data).catch(err=> err.response.data)
}