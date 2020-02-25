import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const SombrerosPage = () => (
  <div>
    <h1>Sombreros Page</h1>
    <h1>Sombreros Page</h1>
    <h1>Sombreros Page</h1>
    <h1>Sombreros Page</h1>
    <h1>Sombreros Page</h1>
  </div>
);
function App() {
  return (
    <div >
      <switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={SombrerosPage} />
      </switch>
    </div>
  );
}

export default App;
