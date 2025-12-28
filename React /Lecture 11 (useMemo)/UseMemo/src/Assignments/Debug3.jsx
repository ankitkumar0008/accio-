import { useState,useMemo } from "react";
function calculateDiscount(price) {
  console.log("Calculating discount...");
  return price * 0.9;
}

function Debug3() {
  const [price, setPrice] = useState(100);

  const discountedPrice = useMemo(() => {
    return calculateDiscount(price);
  }, [price]);

  return (
    <div>
      <h2>Discounted Price: {discountedPrice}</h2>

      <button onClick={() => setPrice(price + 50)}>
        Increase Price
      </button>
    </div>
  );
}
export default Debug3