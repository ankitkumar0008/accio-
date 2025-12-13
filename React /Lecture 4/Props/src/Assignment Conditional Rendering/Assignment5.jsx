function Assignment5() {
  return (
    <>
      <h1>📝 Assignment 5 — Pass multiple data types as props</h1>
      <Cards name="ankit" age={23} isOnline={true}></Cards>
      <Cards name="Aditya" age={23} isOnline={false}></Cards>
    </>
  );
}
export default Assignment5;

function Cards({ name, age, isOnline }) {
  return (
    <p>
      {name} - {age} {isOnline ? "online" : "offline"}
    </p>
  );
}
