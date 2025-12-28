import { useMemo ,memo} from "react";

const ProfileCard = memo(function ProfileCard({ profile }) {
  console.log("ProfileCard rendered");
  return <h3>{profile.name}</h3>;
});

function Debug5() {
  const [showHelp, setShowHelp] = React.useState(false);

  const profile = useMemo(()=>{
    return{ name: "Neha" };
  },[])

  return (
    <div>
      <ProfileCard profile={profile} />

      <button onClick={() => setShowHelp(!showHelp)}>
        Toggle Help
      </button>
    </div>
  );
}
export default Debug5
