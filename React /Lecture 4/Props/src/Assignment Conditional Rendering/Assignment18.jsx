function Assignment18() {
  return (
    <>
      <h1>📝 Assignment 18 — Passing Component as Prop + Conditional Rendering</h1>
      <Card title="Notifications" icon={<span>🔔</span>} />
    </>
  );
}
export default Assignment18;
function Card({icon}){
    if(icon){
        return <>{icon}</>
    }else{
        return <p>No Icon</p>
    }
}
