import { useParams } from "react-router-dom";
function Product(){
    let {id} = useParams();
    return(
        <>
        <h2>Product Page</h2>
        <h3> product With id: {id}</h3>
        </>
    )
}
export default Product;