import * as ReactDOM from 'react-dom';
import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const data = window.localStorage.getItem('MY_APP_STATE');
    if ( data !== null ) setCount(JSON.parse(data));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('MY_APP_STATE', JSON.stringify(count));
}, [count]);

  return (
      <>
          <div>{count}</div>
          <button 
              type="button"
              onClick={() => setCount(count + 1)}
          >
              I never forget a click o_o</button>
              
      </>
      
  );
  
}


ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

export default App;