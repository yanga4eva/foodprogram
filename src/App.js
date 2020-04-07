import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Partyprint from './Asset/components/partypdf';
import Body from './Asset/components/body'
import Header from './Asset/components/header'
import NameInput from './Asset/components/nameinput'
import Nav from './Asset/components/header'

import Nameinput from './Asset/components/nameinput'

function App() {
  return (
    <Router>
      <Nav />
      <br />
    
      <Route exact path="/" component={NameInput} />
      <Route path="/partypdf" component={Partyprint} />
    </Router>
  );
}

export default App;