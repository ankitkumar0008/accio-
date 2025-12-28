import React from "react";
const Controls = React.memo(function Controls({ onPlay, onPause }) {
  console.log("Controls rendered");
  return (
    <>
      <button onClick={onPlay}>Play</button>
      <button onClick={onPause}>Pause</button>
    </>
  );
});

function Debug6() {
  const [dark, setDark] = React.useState(false);

  const onPlay = React.useCallback(() => {
    console.log("Play");
  }, []);

  const onPause = React.useCallback(() => {
    console.log("Pause");
  },[]);

  return (
    <div>
      <Controls onPlay={onPlay} onPause={onPause} />

      <button onClick={() => setDark(!dark)}>
        Toggle Theme
      </button>
    </div>
  );
}
 export default Debug6