import { useState } from 'react';

function CodingProject() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Coding Project</h1>
      <p>This is my coding project</p>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>Increment</button>
      <p>{count} clicks</p>
    </div>
  );
}
