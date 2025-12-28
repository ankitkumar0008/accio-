import { useMemo,useState,memo } from "react";

const Profile = memo(({ user }) => {
  console.log("Profile rendered");
  return <h3>{user.name}</h3>;
});

function Debug1() {
  const [online, setOnline] = useState(true);

  const user = useMemo(()=>{
    return { name: "Riya" }
  },[])

  return (
    <>
      <button onClick={() => setOnline(!online)}>
        Toggle Status
      </button>
      <Profile user={user} />
    </>
  );
}

export default Debug1;
