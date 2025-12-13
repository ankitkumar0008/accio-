function Assignment6() {
  return (
    <>
      <h1>📝 Assignment 6 — Pass an array as props and list items</h1>
      <Skills list={["HTML", "CSS", "React"]} />
    </>
  );
}
export default Assignment6;

function Skills({ list }) {
  return (
    <>
      <ul>
        {list.map((e) => {
         return  <li key={e}>{e}</li>;
        })}
      </ul>
    </>
  );
}
