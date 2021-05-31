import React from "react";
import PayPage from './components/payPage/PayPageComponent';
import Home from "./components/home/home";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';



function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
      <Route exact path="/">
            <Home />
          </Route>
      <Route path="/pay">
        <PayPage/>
      </Route>
          </Switch>
          </Router>
    </div>
  );
}

export default App;
