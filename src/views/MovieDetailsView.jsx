import { useParams, useLocation, useRouteMatch } from 'react-router-dom'
import { Route, Switch } from 'react-router-dom'
import { useEffect, useState, Suspense, lazy } from 'react'
import { FetchMovieById } from '../servicies/FetchApi'
import CastReviews from '../components/CastReviews/CastReviews'
import Loader from 'react-loader-spinner'

const Cast = lazy(() => import('../components/Cast/Cast'))
const Reviews = lazy(() => import('../components/Reviews/Reviews'))

export default function MovieDetailsView() {
  const { movieId } = useParams()
  const location = useLocation()
  //   const history = useHistory()
  const { url } = useRouteMatch()
  const [movie, setMovie] = useState(null)
  useEffect(() => {
    FetchMovieById(movieId, setMovie)
  }, [movieId])

  return (
    <>
      {movie && (
        <div className="movie-card">
          <img
            className="movie-image"
            src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
            alt=""
          />
          <h3 className="">{movie.title}</h3>
          <p>
            <span className="bold">Genre:</span>{' '}
            {movie.genres.map((genre) => genre.name).join(', ')}
          </p>
          <p>
            <span className="bold">Overview:</span> {movie.overview}
          </p>
        </div>
      )}
      <CastReviews url={url} location={location} />

      <Suspense fallback={Loader}>
        <Switch>
          <Route path="/movies/:movieId/cast">
            <Cast />
          </Route>
          <Route path="/movies/:movieId/reviews">
            <Reviews />
          </Route>
        </Switch>
      </Suspense>
    </>
  )
}
