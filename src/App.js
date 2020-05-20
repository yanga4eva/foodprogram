import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Partyprint from './Asset/components/partypdf';
import ButtonComponent from './Asset/components/buttonComp';
import Body from './Asset/components/body'
import Header from './Asset/components/header'
import NameInput from './Asset/components/nameinput'
import Landing from './Asset/components/landing'
import Nav from './Asset/components/header'


function App() {
  return (
    <Router>
      <Nav />
      <br />
    
      <Route exact path="/" component={NameInput} />
      <Route path="/ButtonComp" component={ButtonComponent} />
      <Route path="/landing" component={Landing} />
      <Route path="/partypdf" component={Partyprint} />
    </Router>
  );
}

export default App;