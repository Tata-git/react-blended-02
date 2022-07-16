import { Component } from "react";
import { Button } from "./Button/Button";
import { getMovies } from "./Services/api";
import { mapperFilms } from "./Utils/mapper";
import { MoviesGallery } from "./Gallery/Gallery";

import "./App.css";

export class App extends Component {
  state = {
    movies: [],
    page: 1,
    isLoading: false,
  };
  fetchMovies = () => {
    const { page } = this.state;

    this.setState({ isLoading: true });
    getMovies(page)
      .then(({ data }) => this.setState({ movies: mapperFilms(data.results) }))
      .catch((error) => console.log(error))
      .finally(this.setState({ isLoading: false }));
  };

  render() {
    const { movies } = this.state;
    return (
      <>
        {movies.length === 0 && (
          <Button text="Show films list" handleClick={this.fetchMovies} />
        )}
        <MoviesGallery movies={movies} />
      </>
    );
  }
}

export default App;
