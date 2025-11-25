function Greeting(props) {
  return (
    <div>
      <h2>Hello, {props.name}!</h2>
      <p>You are {props.age} years old.</p>
    </div>
  );
}

export default Greeting;
