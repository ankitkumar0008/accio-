function Assignment3() {


    let age = 17;
    if(age > 18) {
        return <Adult />
    } else {
        return <Minor />
    }

  // let age = 17;
  // return (
  //   <>
  //   <h1>📝 Assignment 3 — Return different components based on age</h1>
  //     {age >= 18 ? <p>Adult</p> : <p>Minor</p>}

  //     {age >= 18 && <p>Adult</p>}
  //     {!(age >= 18) && <p>Adult</p>}
  //   </>
  // );
}
export default Assignment3;


function Adult() {
    return <h3>Info - Adult</h3>
}

function Minor() {
    return <h3>Info - Minor</h3>
}