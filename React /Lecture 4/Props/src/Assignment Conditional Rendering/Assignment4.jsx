function Assignment4() {
  return (
    <>
    <h1>📝 Assignment 4 — Create a Greeting component</h1>
      <Greeting name="Aarav" city="Delhi" />
    </>
  );
}

export default Assignment4;

function Greeting({ name, city }) {
  return (
    <p>
      Hello {name} from {city} !
    </p>
  );
}
