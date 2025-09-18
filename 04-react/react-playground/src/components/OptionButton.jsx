const OptionButton = ({
    title,
    onClickEvent,
}) => {
    return (
        <button type="button" className="option-button" onClick={onClickEvent}>
            {title}
        </button>
    );
};

export default OptionButton;