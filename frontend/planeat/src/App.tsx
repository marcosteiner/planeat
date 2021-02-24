import React from 'react';
//import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import PlanningComponent from "./components/order/planning/PlanningComponent";
import PhoneNumberComponent from "./components/order/checkout/PhoneNumberComponent";
import OrderSuccessComponent from "./components/order/checkout/OderSuccessComponent";
import CodeConfirmationComponent from "./components/order/checkout/OrderConfirmationComponent";
import DishListComponent from "./components/order/planning/DishListComponent";

function App() {
  return (
    <div className="App">
{/*      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>*/}
      <Router>
        <div>
          <Switch>
            <Route path="/phone-number">
              <PhoneNumberComponent />
            </Route>
            <Route path="/order-confirmation">
              <CodeConfirmationComponent />
            </Route>
            <Route path="/order-success">
              <OrderSuccessComponent />
            </Route>
            <Route path="/dishes">
              <DishListComponent />
            </Route>
            <Route path="/">
              <PlanningComponent/>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
