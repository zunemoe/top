const Button = ({
    title,
    onClickEvent,
}) => {
    return (
      <button type="button" className="custom-button" onClick={onClickEvent}>
        {title}
      </button>
    );
};

export default Button;