import { useCallback } from "react";
import { memo,useState } from "react";
const ActionPanel = memo(function ActionPanel({ onSubmit }) {
  console.log("ActionPanel rendered");
  return <button onClick={onSubmit}>Submit</button>;
});

function Debug4() {
  const [open, setOpen] = useState(false);

  const handleSubmit = useCallback(() => {
    console.log("Submitted");
  },[]);

  return (
    <div>
      <ActionPanel onSubmit={handleSubmit} />

      <button onClick={() => setOpen(!open)}>
        Toggle UI
      </button>
    </div>
  );
}
export default Debug4