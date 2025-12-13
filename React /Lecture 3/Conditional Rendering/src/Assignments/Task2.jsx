function Task2(){
    return(
        <>
        <Card name="I phone 15" price={799} status="In Stock" color="green"></Card>
        <Card name="Headphones" price={1699} status="out of Stock" color = "red"></Card>
        </>
    )

}

export default Task2;

function Card(props){
    return(
        <>
        <h1>{props.name}</h1>
        <p>${props.price}</p>
        <p style={{color:props.color}}>{props.status}</p>
        </>
    )
}