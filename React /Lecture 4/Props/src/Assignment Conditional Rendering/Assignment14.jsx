function Assignment14(){
    return(
    <>
    <h1>📝 Assignment 14 — children Prop + Condition (Custom Card)</h1>
    <Card></Card>
    </>
    )
}
export default Assignment14

function Card({title}){
  return (
    <p>{title ? title : "No Title Provided"}</p>
  );
}