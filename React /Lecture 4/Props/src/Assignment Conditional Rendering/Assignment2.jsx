function Assignment2() {
  const isPremiumUser = false;
  return (
    <>
    <h1>📝 Assignment 2 — Show a discount message for premium users</h1>
      {isPremiumUser ? (
        <p>You get 50% discount!</p>
      ) : (
        <p>Upgrade to premium for discounts!</p>
      )}

      {isPremiumUser && <p>You get 50% discount!</p>}
      {!isPremiumUser && <p>Upgrade to premium for discounts!</p>}
    </>
  );
}
export default Assignment2;


