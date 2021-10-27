import axios from 'axios';
const baseUrl= "http://www.omdbapi.com/"
const apiKey="faf7e5bb"
export const get = (movieId) =>{
    return axios.get(`${baseUrl}?apikey=${apiKey}&i=${movieId}`)
}

export const search = (s, page) =>{
    return axios.get(`${baseUrl}?apikey=${apiKey}&s=${s}&page=${page}`)
}