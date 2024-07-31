// import React from "react";

// function App() {
//   return (
//     <div>
//       <Button count={count} setCount={setCount}></Button>
//     </div>
//   );
// }

// function Button(props) {
//   function onButtonClick() {
//     props.setCount(props.count + 1);
//   }

//   return <button onClick={onButtonClick}> Counter {props.count}</button>;
// }

// export default App;

import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleButtonClick = (operation) => {
    if (operation === 'increment') {
      setCount((prevCount) => prevCount + 1);
    } else if (operation === 'decrement') {
      setCount((prevCount) => prevCount - 1);
    } else if (operation === 'multiply') {
      setCount((prevCount) => prevCount * 100);
    }
  };

  return (
    <div>
      <CustomButton label="Increment" onClick={() => handleButtonClick('increment')} count={count} />
      <CustomButton label="Decrement" onClick={() => handleButtonClick('decrement')} count={count} />
      <CustomButton label="Multiply by 100" onClick={() => handleButtonClick('multiply')} count={count} />
    </div>
  );
}

// Component
function CustomButton({ label, onClick, count }) {
  return (
    <button onClick={onClick}>
      {label}: {count}
    </button>
  );
}

export default App;