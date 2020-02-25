import React, { Component } from 'react';
import {Form, Row, Col, Button, link} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import {Route, withRouter} from 'react-router-dom'
import CountryInfo from './country-info';

class NameInput extends React.Component {
    constructor(props){
        super(props)
        this.state = { 
        inputs: [],
        data: [],
        isLoaded: false,
    }
}

nextPath(path) {
    this.props.history.push(path)
    fetch("https://www.familysearch.org/service/discovery/allaboutme/treesurnamecount/" + this.state.surname, {method: "get", headers: { "Authorization": "Bearer 5f7ba8c8-1731-4724-ac27-89906a8b3a8a-prod"}})
            .then(res => res.json())
            .then(json => {
                this.setState ({
                    data: json,
                    isLoaded: true
                })
                const {surname, countries} = this.state.data
                console.log(countries[0].name)
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

        if (!isLoaded) {
            
            return (
                <div className="col-9">
                <Form>
                    <Row>
                      <Col>
                        <Form.Control placeholder="First name"  />
        
        
                      </Col>
                      <Col>
                        <Form.Control placeholder="Last name" onChange={this.surnameinput.bind(this)}/>
                      </Col>
                      </Row> <br />
                      <div id= 'dynamicInput' >
                          {this.state.inputs.map((input, index) => <div key={index}> <Row>
                      <Col>
                        <Form.Control placeholder="First name" />
                      </Col>
                      <Col>
                        <Form.Control placeholder="Last name" />
                      </Col></Row> <br /> </div> )}
        
                      </div>
                       
                    <br />
                    <div><Button onClick={ () => this.appendInput()} variant='success'>Add Guest </Button>{' '}
                    <Button onClick={() => this.nextPath('/country-info')} variant='primary'>Start Party!</Button></div>
                    
                  </Form>
                  
                   {/* <div><Button onClick={ () => this.appendInput()} variant='success'>Add Guest </Button>{' '}
            <Button onClick={() => this.nextPath('/country-info')} variant='primary'>Start Party!</Button></div> */}
            </div>)
        }

        else {
                
        return ( 
            <>
          <div>
            <h1>{this.state.data.surname}</h1>
         {countries.map((input, index) => <li key={index}>{input.name} ({input.count})</li>)}
         <br />
      </div>
      <div id= 'dynamicInput' >
                          {this.state.inputs.map((input, index) => <div key={index}> <Row>
                      <Col>
                        <Form.Control placeholder="First name" />
                      </Col>
                      <Col>
                        <Form.Control placeholder="Last name" />
                      </Col></Row> <br /> </div> )}
        
                      </div>
                       
                    <br />
                    <div><Button onClick={ () => this.appendInput()} variant='success'>Add Guest </Button>{' '}
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