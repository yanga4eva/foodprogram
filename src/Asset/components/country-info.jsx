import React, { Component } from 'react';
import NameInput from './nameinput'

class CountryInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }

    surnameFetch () {
        fetch("https://www.familysearch.org/service/discovery/allaboutme/treesurnamecount/Collings", {method: "get", headers: { "Authorization": "Bearer e97def09-df3d-41cd-b04f-be9ca03cbc75-prod"}})
            .then(res => res.json())
            .then(json => {
                this.setState ({
                    data: json
                })
                })
          
      }

    render() {
        return ( 
            <h1>Data is Loaded</h1>
         );
    }
}
 
export default CountryInfo;