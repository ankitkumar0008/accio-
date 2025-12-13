function Assignment1() {
  const isLoggedIn = true;
  const username = "Ujjwal";
  return (
    <>
      <h1>📝 Assignment 1 — Show a message only if user is logged in</h1>
      {isLoggedIn ? <p>Welcome {username}</p> : <p>Please login first!</p>}
      {/* <P isTrue={true} username = "ujwal"></P> */}
    </>
  );
}
export default Assignment1;

function P({ isTrue, username }) {
  if (isTrue) {
    return <p>Welcome, {username} !</p>;
  } else {
    return <p>Please log in to continue.</p>;
  }
}
