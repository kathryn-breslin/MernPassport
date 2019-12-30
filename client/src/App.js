import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Signup } from "../src/components/Signup"
function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Signup}/>
      </div>
    </Router>
  );
}

export default App;
