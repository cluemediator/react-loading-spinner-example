import React, { useState } from 'react';
import { ClipLoader, BarLoader, PropagateLoader, RingLoader } from "react-spinners";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="App">
      <h4>Add a loading animation in React using react-spinnerst - <a href="https://www.cluemediator.com">Clue Mediator</a></h4>
      <button onClick={() => setLoading(!loading)}>Toggle Loaders</button>

      <div className='spinners'>
        <ClipLoader
          color="blue"
          size={30}
          loading={loading}
          cssOverride={{
            display: "block"
          }}
        />
        <PropagateLoader loading={loading} />
        <RingLoader loading={loading} />
        <BarLoader loading={loading} color="purple" />
      </div>

      <div className='note'>
        <b>Note:</b> It accepts basic colors: maroon, red, orange, yellow, olive, green, purple, white, fuchsia, lime, teal, aqua, blue, navy, black, gray, silver
      </div>
    </div>
  );
}

export default App;