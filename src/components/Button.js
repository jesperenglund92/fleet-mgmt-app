import PropTypes from 'prop-types';

const Button = ({ color, textColor, text, onClick, classes }) => {
  return (
    <button
      className={classes}
      style={{ backgroundColor: color, color: textColor }}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

Button.defaultProps = {
  color: 'gray',
  textColor: '#000',
  classes: 'btn'
}

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  textColor: PropTypes.string,
  onClick: PropTypes.func,
  classes: PropTypes.string
}

export default Button
