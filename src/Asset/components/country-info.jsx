import React, { Component } from 'react';
import NameInput from './nameinput'
import Link from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import Partyprint from './partypdf';

class CountryInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoaded : false
        }
    }

    recipe(index) {
        fetch("https://aksgapi.herokuapp.com/person/food/" + (index.input.name))
        .then(res => res.json())
        .then(json => {
        this.setState ({
        recipe: json,
        isLoaded : true
      })
      console.log(index.input.name)
      window.open("https://www.countryreports.org/country/" + (index.input.name) + "/recipes.htm")
      })              
    }

    render() {
        const countries = this.props.data
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
                <div className="col-2">
                {countries.map((input, index) => <li onClick= {() => this.recipe({input})}  key={index}><a href="">{input.name} ({input.count})</a></li>)}
            </div>
         
         )
            } else {
                if (this.state.recipe ) {
                return(
                    <>
                    <div className="col-4">
                    {countries.map((input, index) => <li onClick= {() => this.recipe({input})}  key={index}>{input.name} ({input.count})</li>)}
                    <br /> <br />
                    </div>
                    <div>
                    <Partyprint data={countries} recipe={this.state.recipe} />
                    </div>
                    </>
                    
                )
            } else {
                return (
                <div className="col-4">
                    {countries.map((input, index) => <li onClick= {() => this.recipe({input})}  key={index}>{input.name} ({input.count})</li>)}
                    <br /> <br />
                    No Recipe for country
                </div>
                )
            }
        }
                
    }
}
 }
 
export default CountryInfo;