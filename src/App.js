import { Component } from "react";
import { Button } from "./Button/Button";
import { getMovies } from "./Services/api";
import { mapperFilms } from "./Utils/mapper";
import { MoviesGallery } from "./MoviesGallery/MoviesGallery";
import { Modal } from "./Modal/Modal";
import "./App.css";

class App extends Component {
  state = {
    movies: [],
    page: 1,
    isLoading: false,
    poster: "",
  };
  //-------- компонент оновлено ---------------
  componentDidUpdate(_, prevState) {
    const { page } = this.state;
    if (prevState.page !== page) this.fetchMovies(page);
  }
  //-------------отримати фільми -------------
  fetchMovies = (page) => {
    console.log(page);

    this.setState({ isLoading: true });

    getMovies(page)
      .then(({ data }) =>
        this.setState((prevState) => ({
          movies: [...prevState.movies, ...mapperFilms(data.results)],
        }))
      )
      .catch((error) => console.log(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };
  //----------- обробник Завантажити більше -----------
  handlerLoadMore = () => {
    this.setState((prevState) => ({ page: prevState.page + 1 }));
  };
  //-----------  перемкнути статус -----------------
  toggleStatus = (id) => {
    console.log(id);

    const { movies } = this.state;

    const newMovies = movies.map((movie) => {
      if (movies.id === id) {
        return { ...movie, watched: !movie.watched };
      }
      return movie;
    });
    this.setState({ movies: newMovies });
  };

  openModal = (poster) => {
    this.setState({ poster });
  };
  closeModal = () => {
    this.setState({ poster: " " });
  };

  render() {
    const { movies, page, isLoading, poster } = this.state;

    return (
      <>
        {movies.length === 0 && (
          <Button
            text="Show films list"
            handleClick={() => this.fetchMovies(page)}
          />
        )}
        <MoviesGallery
          movies={movies}
          handleStatus={this.toggleStatus}
          handleModal={this.openModal}
        />
        {movies.length > 1 && (
          <Button text="Load more" handleClick={this.handlerLoadMore} />
        )}
        {isLoading && <p>Loading...</p>}
        {poster && <Modal poster={poster} closeModal={this.closeModal} />}
      </>
    );
  }
}

export default App;
