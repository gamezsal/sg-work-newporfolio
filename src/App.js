import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Navbar from "./components/Navbar/index";
import './index.css';

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/resume" component={Resume} />
        </div>
      </Router>
    </>
  );
}

export default App;
