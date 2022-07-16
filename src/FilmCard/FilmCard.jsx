export const FilmCard = ({
  movie: { votes, title, watched, poster },
  handleStatus,
  id,
}) => {
  return (
    <li>
      <h2>{title}</h2>
      <p>Votes: {votes}</p>
      <p>
        Watched:{" "}
        <span onClick={() => handleStatus(id)}>{watched.toString()}</span>
      </p>
    </li>
  );
};
