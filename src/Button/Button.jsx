// export PropTypes from ''

export const Button = ({ handleClick, text }) => {
  return (
    <button type="button" onClick={handleClick}>
      {text}
    </button>
  );
};

// Button.propTypes = {
// handleClick: Prop
// }
