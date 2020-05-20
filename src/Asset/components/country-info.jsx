import React, { Component } from 'react';
import NameInput from './nameinput'
import {Col} from 'react-bootstrap'
import {Dropdown, Row, Menu, Item} from 'react-bootstrap'
import Link from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import Partyprint from './partypdf';

class CountryInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoaded : false,
            surname : false,
            recipe: null,
            surnameData : {},
            recipeLoaded: false,
            selectedValue: String
        }
    }

    checkSurname(data) {
        fetch("https://www.familysearch.org/service/discovery/allaboutme/treesurnamecount/" + data, {method: "get", headers: { "Authorization": "Bearer " + this.props.token}})
          .then(res => res.json())
          .then(json => {
            this.setState({
                surnameData: json,
                surname: true
            })
            console.log(this.state.surnameData)
    }
          )}

          partnerLink() {

          }


    recipe(index) {
        fetch("https://aksgapi.herokuapp.com/person/food/" + (index))
        .then(res => res.json())
        .then(json => {
        this.setState ({
        recipe: json,
        recipeLoaded : true,

      })
      console.log(index)
    //   window.open("https://www.countryreports.org/country/" + (index.input.name) + "/recipes.htm")
      })              
    }

    render() {
        // const countries = this.props.data
        const {countries} = this.state.surnameData
        const surname = this.props.surnames
        const propload = this.props.isLoadedData
        const loaded = this.state.isLoaded
        const {recipe} = this.state
        if (!propload) {
            return (
                <div> { }</div>
            )
        }
        else {
            if (!loaded) {
            return (
                <>
                
            <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Select Surname
            </Dropdown.Toggle>
          
            <Dropdown.Menu>
              {surname.map((input,index) => <Dropdown.Item key={index} role="menuitem"  value={input} onSelect={(data) => this.checkSurname(input)} >{input}</Dropdown.Item>)}
            </Dropdown.Menu>
          </Dropdown>
          <br /><br />
          <Row>
          {this.state.surname ? 
          
                    
                    <div className="col-4">
                        <h5></h5>
                      
                    {countries.map((input,index) => <li key={index.name}>{input.name} ({input.count}) <a href='#' onClick={() => this.recipe(input.name)} >Recipe</a></li>)}
                    {/* {countries.map((input, index) => <Col key={index.name} xs="3">{input.name}</Col>)} */}
                    </div> : <div> {" " }</div>
          
         
          }
          {this.state.recipe ? <Col ><Partyprint data={countries} recipe={this.state.recipe} /></Col> : <div> {'Sorry We do not have a recipe for the Country Please check the following links' } <a href= '#' onClick={() => this.partnerLink()} > Country Reports</a> </div>}
          
          </Row></>
    
            )}
                
    }
}
 }
 
export default CountryInfo;