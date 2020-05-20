import React, { Component } from 'react';
import {Form, Container,Row, Col, Button, link} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import {Route, withRouter} from 'react-router-dom'
import {Chart} from 'react-google-charts'
import CountryInfo from './country-info'
import Partyprint from './partypdf';

class NameInput extends React.Component {
  constructor(props){
    super(props)
    this.state = { 
      inputs: [],
      data: {},
      isLoaded: false,
      homeMatch: [],
      recipe: {},
      surnameInput:[],
      anotherData: [],
      countryCount: {},
      homeCount: {},
      realSurname : {},
      chartData: [['Country', 'Occurence']]
    }
  }

  async nextPath(path) {
    this.props.history.push()
    
      await fetch("https://strategicsolutions.herokuapp.com/homelands/search?name" + this.state.surnameInput[0])
        .then(res => res.json())
        .then(json => {
          this.setState ({
          token: json.token,
        })
        for (var i= 0; i < this.state.surnameInput.length; i++) {
         fetch("https://www.familysearch.org/service/discovery/allaboutme/treesurnamecount/" + this.state.surnameInput[i], {method: "get", headers: { "Authorization": "Bearer " + this.state.token}})
          .then(res => res.json())
          .then(json => {
            this.setState({
                countryCount : json,
                homeCount : json.countries[0]
            })
            const country = this.state.homeMatch
            const chart = this.state.chartData
            const jsonData = json
            for (var i = 0; i < jsonData.countries.length; i++){
              const newData = jsonData.countries[i].name
              
              
              country.push(newData)
            
        //   this.setState ({
        //   data: json,
        //   homeMatch: json.countries[0],
        //   isLoaded: true
        // })
            }
            
  
  })
  
}
        
    })
    const newCon = [...new Set(this.state.homeMatch)]
            for (var x=0; x< newCon.length; x++){
              const chart = this.state.chartData
            const counter = this.state.homeMatch.filter((el)=>{ return el == newCon[x]}).length
            this.state.chartData.push([newCon[x], counter])
            this.setState({isLoaded: true, realSurname: newCon})
            console.log(JSON.stringify(this.state.chartData))
            }
    
  
  
  }

surnameinput(event) {
  const target = event.target
  const value = target.value
  this.setState(prevState => ({ surnameInput: prevState.inputs.concat([value])}))
  console.log(this.state.surnameInput)
  // this.setState({ 
  //   surname: value
  // })
}

addSurname(event) {
  const target = event.target
  const value = target.value
  const newState = this.state.surnameInput
  newState.push(value)
  // console.log(this.state.surnameInput)
  // this.setState({ 
  // surnameInput: newValue
  // })
}
doNothing(){
  console.log('')
}

addname(event){
  const target = event.target
  const value = target.value
  this.state.surnameInput.push(value)
  console.log(this.state.surnameInput)
}

render() { 
  const {countries, surname} = this.state.countryCount
  const {isLoaded} = this.state
  const foodrecipe = this.state.recipe
  const mysurname = this.state.surnameInput
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
            <Form.Control placeholder="Last name" onChange=  {this.surnameinput.bind(this)}/>
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
                <Form.Control placeholder="Last name" on onPointerLeave={this.addSurname.bind(this) }  />
              </Col></Row> <br /> </div> )}
          </div>
          <br />
          <div>
            <Button onClick={ () => this.appendInput()} variant='success'>Add Guest </Button>{' '}
                <Button onClick={() => this.nextPath()} variant='primary'>Start Party!</Button>
          </div>
      </Form>
    </div>
    )}
  else {
    return ( 
      <>
        
          <br />

          <Container>
        <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
        <Chart
  width={'500'}
  height={'300'}
  chartType="Bar"
  loader={<div>Loading Chart</div>}
  data={this.state.chartData}
  options={{
    title: 'Surname by Countries',
    chartArea: { width: '70%' },
    hAxis: {
      title: 'Total Occurence',
      minValue: 0,
    },
    vAxis: {
      title: 'Country',
    },
  }}
  // For tests
  rootProps={{ 'data-testid': '1' }}
/>
        </Col>
      </Row>
      </Container>
        
<div className="container">
          <h3>Surnames and Origin</h3>
        <CountryInfo token = {this.state.token} data = {countries} country={this.state.homeCount} surnames={mysurname} isLoadedData = {this.state.isLoaded}  />
        </div>

        <br /><br />
        {/* <h3>Country Recipe</h3>
        <Partyprint data={countries} recipe={this.state.recipe} /> */}

      </>
    )}
  }
  appendInput() {
  var newInput = `input-${this.state.inputs.length}`
  this.setState(prevState => ({ inputs: prevState.inputs.concat([newInput])}))
  }
}
 
export default withRouter(NameInput);