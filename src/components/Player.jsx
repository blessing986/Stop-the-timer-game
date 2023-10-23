import { useState } from "react";

export default function Player() {
  const [enteredPlayerName, setEnteredPlayerName] = useState("");
  const [submitted, setsubmitted] = useState(false);

  const handleChange = (event) => {
    setsubmitted(false);
    setEnteredPlayerName(event.target.value);
  };

  const handleClick = () => {
    setsubmitted(true);
  };

  return (
    <section id="player">
      <h2>Welcome {submitted ? enteredPlayerName : "unknown entity"}</h2>
      <p>
        <input type="text" onChange={handleChange} value={enteredPlayerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
