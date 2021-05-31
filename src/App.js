import {Route} from 'react-router-dom';
import './App.css';
import Home from "./components/home/home";
import paymentPage from "./components/home/home";

function App() {
  return (
    <div className="App">
      <Route path="/">
            <Home />
          </Route>
          <Route path="/Pay">
            <paymentPage />
          </Route>
    </div>
  );
}

export default App;
