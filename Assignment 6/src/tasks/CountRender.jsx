import { useState, useRef} from "react";


function RenderCounter() {
  const [count, setCount] = useState(0);
  const renderCount = useRef(1);
  renderCount.current += 1;

  return (
    <div>
      <h2>Render Count Example </h2>
      <p>Clicked: {count} times </p>
      <p>Component Rendered: {renderCount.current} times </p>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Click to Re-render
      </button>
    </div>
  );
}

export default RenderCounter;
