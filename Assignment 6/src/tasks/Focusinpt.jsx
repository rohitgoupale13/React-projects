import { useRef } from "react";

function FocusForm() {
  const inputRef = useRef(null); // input ka reference banaya

  const handleFocus = () => {
    inputRef.current.focus(); // button click hote hi input pe focus hoga
  };

  return (
    <div>
      <h2>Focus On Click</h2>

      <input
        ref={inputRef} // yeh ref input pe lagaya
        type="text"
        placeholder="Type here..."
      />

      {/* button click se input active hoga  */}
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
}

export default FocusForm;
