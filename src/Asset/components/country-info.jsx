import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'

class CountryInfo extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         data: []
    //     }
    // }

    

    render() {
        const countries = this.props.data
        const isLoaded = this.props.isLoadedData
        if (!isLoaded) {
            return (
                <div> { }</div>
            )
        }
        else {
            return (
                <div className="col 9">
                {countries.map((input, index) => <li key={index}>{input.name} ({input.count})</li>)}
            </div>
         
         )
    }
}
 }
 
export default CountryInfo;