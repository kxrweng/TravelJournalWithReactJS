import React from 'react';
import Header from "./Component/Header.js";
import Body from "./Component/Body.js"
import Data from "./Component/Data.js"

function App() {

  return (
    <div className="App">
    
      <Header />

      {Data.map((datum) => 
        <div>
          <Body {...datum} />
          </div>
      )}
    </div>
  );
}

export default App;
