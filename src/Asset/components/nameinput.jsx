import React, { Component } from 'react';
import {Form, Row, Col, Button, link} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import {Route, withRouter} from 'react-router-dom'
import CountryInfo from './country-info'
import Partyprint from './partypdf';

class NameInput extends React.Component {
  constructor(props){
    super(props)
    this.state = { 
      inputs: [],
      data: {},
      isLoaded: false
    }
  }

nextPath(path) {
  this.props.history.push()
  
    fetch("https://strategicsolutions.herokuapp.com/homelands/search?name" + this.state.surname, {method: "get"})
      .then(res => res.json())
      .then(json => {
        this.setState ({
        token: json.token,
      })
      fetch("https://www.familysearch.org/service/discovery/allaboutme/treesurnamecount/" + this.state.surname, {method: "get", headers: { "Authorization": "Bearer " + this.state.token}})
	      .then(res => res.json())
      	.then(json => {
        this.setState ({
        data: json,
        homeMatch: json.countries[0].name,
        isLoaded: true
      })
      const country = this.state.data.countries[0].name
      const countryM = this.state.data
    console.log(this.state.homeMatch)
    })              
})
fetch("https://aksgapi.herokuapp.com/person/food/Nigeria", {method: "get"})
	      .then(res => res.json())
      	.then(json => {
        this.setState ({
        recipe: json
      })
    })
}

surnameinput(event) {
  const target = event.target
  const value = target.value
  this.setState({ 
    surname: value
  })
}
render() { 
  const {countries, surname} = this.state.data
  const {isLoaded} = this.state
  const foodrecipe = this.state.recipe
  if (!isLoaded) {
    return (
      <div className="col-9">
      <p>Guest Names</p>
      <Form>
        <Row>
          <Col>
            <Form.Control placeholder="First name"  />   
          </Col>
          <Col>
            <Form.Control placeholder="Last name" onChange={this.surnameinput.bind(this)}/>
          </Col>
        </Row>
         <br />
         <div id= 'dynamicInput' >
            {this.state.inputs.map((input, index) => <div key={index}> 
            <Row>
              <Col>
                <Form.Control placeholder="First name" />
              </Col>
              <Col>
                <Form.Control placeholder="Last name" />
              </Col></Row> <br /> </div> )}
          </div>
          <br />
          <div><Button onClick={ () => this.appendInput()} variant='success'>Add Guest </Button>{' '}
                <Button onClick={() => this.nextPath()} variant='primary'>Start Party!</Button>
          </div>
      </Form>
    </div>
    )}
  else {
    return ( 
      <>
        
        <div>

          <br />
          <div className="container">
          <h1>{surname}</h1>
        <CountryInfo data = {countries} isLoadedData = {this.state.isLoaded} />
        </div>

        <br /><br />
        <h3>Country Recipe</h3>
        <Partyprint data={countries} food={this.state.recipe} />
        </div>
      </>
    )}
  }

  appendInput() {
  var newInput = `input-${this.state.inputs.length}`
  this.setState(prevState => ({ inputs: prevState.inputs.concat([newInput])}))
  }
}
 
export default withRouter(NameInput);