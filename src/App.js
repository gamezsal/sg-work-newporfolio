import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Navbar from "./components/Navbar/index";

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Navbar />
          <Route exact path="/about" component={About} />
        </div>
      </Router>
    </>
  );
}

export default App;
