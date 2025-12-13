function Props(){
    return (
        <>
        <Greeting name="Jay" age={26} />
        <UserCard name="Aayush" age={30} place="Pune" />
        <Active isActive={false} />
        <Numbers nums={[10, 20, 30, 40]} />
        <User info={{name: "Jay", age: 26, place: "Pune"}} />
        </>
     
  )
}
export default Props;

function Greeting(props) {
  return <h2>Hello {props.name} Age: {props.age}</h2>
}

function UserCard(props) {
  return (
    <>
      <p>{props.name}</p>
      <p>Age: {props.age}</p>
      <p>Place: {props.place}</p>
    </>
  )
}

function Active(props) {
  return (
    <>
      {props.isActive ? <h2>You are active</h2> : <h2>You are not active</h2>}
    </>
  )
}

function Numbers(props) {
  return (
    <>
      {props.nums.map((n, i) => (
        <li id={i}>{n}</li>
      ))}
    </>
  )
}

function User(props) {
  return (
    <>
      <p>{props.info.name}</p>
      <p>{props.info.age}</p>
      <p>{props.info.place}</p>
    </>
  )
}
