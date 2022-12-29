const Button = (props) => {
  const { text, onClick, className = "", icon } = props;

  return (
    <button className={className} onClick={(e) => onClick(e)}>
      {icon}
      {text}
    </button>
  );
};

export default Button;
