function Assignment17() {
  return (
    <>
      <h1>📝 Assignment 17 — Pass Function Prop + children Prop</h1>
      <Wrapper onClick={() => alert("Box clicked!")}>
        <h2>Content inside wrapper</h2>
      </Wrapper>
    </>
  );
}
export default Assignment17;

function Wrapper({onClick}){
    return (
        <div  style={{height:100 , width:100 , border: "2px solid black"}} onClick={onClick}></div>
    )
}
