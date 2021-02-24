import React from 'react';
import logo from './logo.svg';
import './App.css';
import PlanningComponent from "./components/order/planning/PlanningComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <PlanningComponent/>
    </div>
  );
}

export default App;
