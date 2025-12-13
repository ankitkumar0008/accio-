function Assignment11() {
  return (
    <>
      <h1>📝 Assignment 11 — Props Drilling (3 levels)</h1>
      <Drill name="ujwal" />
    </>
  );
}
export default Assignment11;


function Drill({ name }) {
  return <Drill1 name={name} />;
}


function Drill1({ name }) {
  return <Drill2 name={name} />;
}


function Drill2({ name }) {
  return <p>{name} level 3</p>;
}
