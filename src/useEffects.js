import React, { useState, useEffect } from "react";

const UseEffects1 = () => {
  const [countn, setCountn] = useState(0);

  useEffect(() => {
    document.title = `chats(${countn})`;
  });

  return (
    <div>
      <h1>{countn}</h1>
      <button className="btn" onClick={() => setCountn(countn + 1)}>
        Click me{" "}
      </button>
    </div>
  );
};
// useState rerender our component
export default UseEffects1;
