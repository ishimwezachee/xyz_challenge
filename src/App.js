import {Route} from 'react-router-dom';
import './App.css';
import Home from "./components/home/home";
import paymentPage from "./components/payPage/payPage";

function App() {
  return (
    <div className="App">
      <Route exact path="/">
            <Home />
          </Route>
          <Route path="/pay">
            <paymentPage />
          </Route>
    </div>
  );
}

export default App;
