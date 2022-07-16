export const FilmCard = ({ movie: { votes, title, watched, poster } }) => {
  return (
    <li>
      <h2>{title}</h2>
      <p>Votes: {votes}</p>
      <p>Watched: {watched.toString()}</p>
      <p>Watched: {poster}</p>
    </li>
  );
};
