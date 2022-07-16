export const mapperFilms = (movies) => {
  return movies.map(
    ({ id, poster_path: poster, title, vote_average: votes }) => ({
      id,
      poster,
      title,
      votes,
      watched: false,
    })
  );
};
