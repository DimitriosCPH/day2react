import React from 'react';


function App(props) {  
  return (
    <div>
      <header>
        <h1>{props.title}</h1>
      </header>
      <p>
        {props.txt}
      </p>
    </div>
  )
}

export default App;
