function Button(props) {
  const incrementCounter = () => {
    props.setCounter(props.counter + 1);
  };
  return <button onClick={incrementCounter}>Click Me</button>;
}

export default Button;
