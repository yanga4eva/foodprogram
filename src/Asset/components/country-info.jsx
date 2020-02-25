import React, { Component } from 'react';
import NameInput from './nameinput'

class CountryInfo extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         data: []
    //     }
    // }

    

    render() {
        console.log(this.props.data)
        console.log(this.props.isLoadedData)
        const countries = this.props.data
        const isLoaded = this.props.isLoadedData
        if (!isLoaded) {
            return (
                <div> { }</div>
            )
        }
        else {
            return (
            <div>
                {countries.map((input, index) => <li key={index}>{input.name} ({input.count})</li>)}
            </div>
         
         )
    }
}
 }
 
export default CountryInfo;