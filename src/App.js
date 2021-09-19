import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import Container from "./components/container/Container";
import Loader from "react-loader-spinner";
import "./App.css";

const HomeView = lazy(() =>
  import("./views/HomeView" /* webpackChunkName: "HomeView" */)
);
const MoviesView = lazy(() =>
  import("./views/MoviesView" /* webpackChunkName: "MoviesView" */)
);
const MovieDetailsView = lazy(() =>
  import("./views/MovieDetailsView" /* webpackChunkName: "MovieDetailsView" */)
);
const NotFound = lazy(() =>
  import("./views/NotFound" /* webpackChunkName: "NotFound" */)
);

function App() {
  return (
    <div className="App">
      <Container>
        <Navigation />

        <Suspense fallback={Loader}>
          <Switch>
            <Route path="/" exact>
              <HomeView />
            </Route>

            <Route path="/movies" exact>
              <MoviesView />
            </Route>

            <Route path="/movies/:movieId">
              <MovieDetailsView />
            </Route>

            <Route>
              <NotFound />
            </Route>
          </Switch>
        </Suspense>
      </Container>
    </div>
  );
}

export default App;
