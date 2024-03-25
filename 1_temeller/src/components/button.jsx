const Button = (props) => {
  return (
    <button
      className="btn"
      onClick={props.handler}
      style={{
        background: props.color,
        width: props.size,
        padding: props.padding,
      }}
    >
      {props.title}
    </button>
  );
};
export default Button;
