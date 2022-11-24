import axios from "axios";

const apiKey = process.env.REACT_APP_APIKEY
const baseUrl = process.env.REACT_APP_BASEURL

export const getMovieList = async() => {
    const movie = await axios.get(`${baseUrl}/movie/popular?api_key=${apiKey}`)

    return movie.data.results
}

// export const getMovieRec = async() => {
//     const recomen = await axios.get(`${baseUrl}
//     /movie/{movie_id}/recommendations?api_key=${apiKey}`)
//     return recomen.data.results
// }

export const searchMovie = async(q) => {
    const search = await axios.get(`${baseUrl}/search/movie?query=${q}&api_key=${apiKey}`)
    console.log(search);
    return search.data.results;
}