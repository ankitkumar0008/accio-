function Assignment9(){
    return(
        <>
        <h1>📝 Assignment 9 — Card that uses ternary with props</h1>
        <ProductCard title="iPhone" inStock={false} />
        </>
    )
}
export default Assignment9
function ProductCard({ title, inStock }) {
  return (
    // <p>
    //   {title} is {inStock ? "in stock" : "out of stock"}
    // </p>
    <>
    {inStock?<p>{title} <span style={{color:"green"}}>in stock</span></p>:<p>{title} <span style={{color:"red"}}>out of stock</span></p>}
    </>
  );
}

