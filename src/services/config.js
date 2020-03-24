import axios from 'axios'

export const http = axios.create({
    baseURL: 'https://java-apirest-produtos.herokuapp.com/api'
})