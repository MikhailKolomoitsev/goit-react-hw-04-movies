import Navigation from "./components/navigation/Navigation";
import Container from "./components/container/Container";
import { Switch, Route } from "react-router-dom";
import HomeView from "./views/HomeView";
import NotFound from "./views/NotFound";
import MoviesView from "./views/MoviesView";
import MoviePage from "./views/MoviePage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Container>
        <Navigation />
        <Switch>
          <Route path="/" exact>
            <HomeView></HomeView>
          </Route>

          <Route path="/movies" exact>
            <MoviesView></MoviesView>
          </Route>

          <Route path="/movies/:movieId" exact>
            <MoviePage></MoviePage>
          </Route>

          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Container>
    </div>
  );
}

export default App;
