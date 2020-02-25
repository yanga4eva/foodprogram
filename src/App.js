import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import logo from './logo.svg';
import Body from './Asset/components/body'

import CountryInfo from './Asset/components/country-info'

function App() {
  return (
    <Router>
      <Body />
      <br />

      <Route path="/country-info" exact component={CountryInfo} />
    </Router>
  );
}

export default App;
