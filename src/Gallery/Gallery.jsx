import { nanoid } from "nanoid";
import { getMovies } from "../Services/api";
import { FilmCard } from "../FilmCard/FilmCard";

export const MoviesGallery = ({ movies }) => {
  //     return movies.map(({ id, title, poster, votes }) => {
  return movies.map(({ id, ...restProps }) => {
    return <FilmCard key={id + nanoid()} movie={restProps} />;
  });
};