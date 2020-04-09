import React, { Component } from 'react';
import NameInput from './nameinput'
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
                <div className="containter">
                {countries.map((input, index) => <li onClick= {() => this.recipe({input})}  key={index}>{input.name} ({input.count})</li>)}
            </div>
         
         )
            } else {
                return(
                    <>
                    <div>
                    {countries.map((input, index) => <li onClick= {() => this.recipe({input})}  key={index}>{input.name} ({input.count})</li>)}
                    <br /> <br />
                    <Partyprint data={countries} recipe={this.state.recipe} />
                    </div>
                    </>
                    
                )
            }
                
    }
}
 }
 
export default CountryInfo;