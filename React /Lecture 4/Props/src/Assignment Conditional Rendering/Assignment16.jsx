function Assignment16() {
  return (
    <>
      <h1>📝 Assignment 16 — Pass Array + children + Conditional Rendering</h1>
      <List items={[10, 20, 30]}>
        <h2>Numbers List</h2>
      </List>
    </>
  );
}
export default Assignment16;

function List({items}){
    if(items.length > 0 ){
        return (
            <ul>{items.map((i)=>{
                return <li>{i}</li>
            })}</ul>
        )
    }else{
         return <p>No items found</p>
    }
}
