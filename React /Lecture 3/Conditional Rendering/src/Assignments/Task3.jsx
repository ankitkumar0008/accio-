function Task3() {
  return (
    <>
      <User
        name="ankit"
        age={24}
        email="akit123@email.com"
        skill={["html", "css", "js"]}
      ></User>
      <User
        name="adi"
        age={25}
        email="adi123@email.com"
        skill={["react", "video editing", "social media"]}
      ></User>
    </>
  );
}
export default Task3;

function User(props) {
  return (
    <>
      <h1>{props.name}</h1>
      <p>age:{props.age}</p>
      <p>email:{props.email}</p>
      <p>Skills</p>
      <ul>
        {props.skill.map((s) => {
          return <li>{s}</li>;
        })}
      </ul>
    </>
  );
}
