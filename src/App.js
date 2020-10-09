import React from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom"
import Homepage from "./components/Homepage";
import './App.css';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Homepage} />
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;