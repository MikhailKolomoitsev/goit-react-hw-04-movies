import axios from 'axios'

const key = '6acc6746be8af475302214b8237b9c48'
axios.defaults.baseURL = `https://api.themoviedb.org/3`
export function FetchTrending(callback) {
  const urlTrending = '/trending/all/day?api_key='
  const url = `${urlTrending}${key}`
  axios
    .get(url)
    .then((resp) => resp.data.results)
    .then(callback)
    .catch((error) => error.message)
}

export function FetchMovies(query, callback) {
  const url = `/search/movie?api_key=${key}&language=en-US&query=${query}&page=1&include_adult=false`
  axios
    .get(url)
    .then((res) => {
      if (!res.data.results.length) {
        return alert('Nothing found')
      }
      return res.data.results
    })
    .then(callback)
    .catch((error) => error.message)
}

export function FetchMovieById(id, callback) {
  const url = `/movie/${id}?api_key=${key}&language=en-US`
  axios
    .get(url)
    .then((res) => res.data)
    .then(callback)
    .catch((error) => error.message)
}

export function FetchMovieReviews(id, callback) {
  const url = `/movie/${id}/reviews?api_key=${key}&language=en-US&page=1`
  axios
    .get(url)
    .then((res) => res.data.results)
    .then(callback)
    .catch((error) => error.message)
}

export function FetchMovieCast(id, callback) {
  console.log('id', id)
  const url = `/movie/${id}/credits?api_key=${key}&language=en-US`
  axios
    .get(url)
    .then((res) => res.data.cast)
    .then(callback)
    .catch((error) => error.message)
}
