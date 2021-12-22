import React, { useState, useEffect } from 'react';

function UseEffectUsage() {
  const [count, setCount] = useState(0);
  //useEffect demo
  let Timer = useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 5);
    }, 10000);
    return () => clearTimeout(Timer);
  }, []);

  return (
    <>
      <div style={{ marginTop: '50px', marginRight: '200px' }}>
        I have rendered {count} times!
      </div>
    </>
  );
}
export default UseEffectUsage;
