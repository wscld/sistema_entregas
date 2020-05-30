import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Registro from './Pages/Registro';
import Lista from './Pages/Lista';
import Toolbar from './Components/Toolbar';
import Detalhe from './Pages/Detalhe';

function App() {
  return (
    <Router>
      <Toolbar/>
      <Switch>
        <Route path="/lista" component={Lista}/>
        <Route path="/detalhe/:id" component={Detalhe}/>
        <Route path="/" component={Registro}/>
      </Switch>
    </Router>
  );
}

export default App;
