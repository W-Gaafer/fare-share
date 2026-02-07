function Button({ children, clickFunction }) {
  return (
    <button className="button" onClick={clickFunction}>
      {children}
    </button>
  );
}

export default Button;
