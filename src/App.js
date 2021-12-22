import React, { useState } from 'react';
import './style.css';
import UseEffectUsage from './UseEffectUsage.js';
import ReactDOM from 'react-dom';

const App = () => {
  const [style, setStyle] = useState('color1');

  const changeStyle = () => {
    console.log('you just clicked');

    setStyle('color2');
  };
  return (
    <>
      <div>
        <button className={style} onClick={changeStyle}>
          Change color
        </button>
      </div>
      {/* <div style={{ marginTop: '50px', marginRight: '200px' }}>
        Show UseEffect usage
      </div> */}
      <UseEffectUsage />
    </>
  );
};
export default App;
