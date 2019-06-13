import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import './App.css';


function App() {
  return (
    <Router>
      <div>
        <Wrapper>
          <Route exact path="/" component={Home} />

        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
