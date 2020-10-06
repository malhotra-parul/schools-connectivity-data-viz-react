import React from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom"
import homepage from "./pages/homepage";
import './App.css';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Switch>
        <Route path="/" component={homepage} />
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;