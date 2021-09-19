import { useParams, useLocation, useRouteMatch, useHistory } from 'react-router-dom'
import { Route, Switch } from 'react-router-dom'
import { useEffect, useState, Suspense, lazy } from 'react'
import { FetchMovieById } from '../servicies/FetchApi'
import CastReviews from '../components/CastReviews/CastReviews'
import Loader from 'react-loader-spinner'
import MovieDetailsInfo from '../components/MovieDetailsInfo/MovieDetailsInfo'

const Cast = lazy(() => import('../components/Cast/Cast'))
const Reviews = lazy(() => import('../components/Reviews/Reviews'))

export default function MovieDetailsView() {
  const { movieId } = useParams()
  const location = useLocation()
  const history = useHistory()
  const { url } = useRouteMatch()
  const [movie, setMovie] = useState(null)

  useEffect(() => {
    FetchMovieById(movieId, setMovie)
  }, [movieId])
  console.log(history)
  console.log(location)
  const goBack = () => {
    history.push(location?.state?.from ?? "/");
    console.log(history)
    console.log(location?.state?.from)
  };

  return (
    <>
      {movie && <MovieDetailsInfo movie={movie} goBack={goBack} />}
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
