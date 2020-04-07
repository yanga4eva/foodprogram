import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
 
class ComponentToPrint extends React.Component {
  render() {
      const data = this.props.printdata[0]
      const {name, history, recipe, procedure} = this.props.recipe

      console.log(recipe)
    return (
        <>
        <div className="col 9">
                <h3>Dish Name : {name}</h3>
                <br />
                <h4>History</h4>
                <p>{history}</p>
            <br />
                <h4>Recipe</h4>
                <p>{recipe}</p>
            <br />
                <h4>Procedure</h4>
                <p>{procedure}</p>
            </div>
            </>
    );
  }
}
 
class Partyprint extends React.Component {
    render() {
        const data = this.props.data
        const food = this.props.food
      return (
        <div>
          <ReactToPrint
            trigger={() => <a href="#">Print this out</a>}
            content={() => this.componentRef}
          />
          <ComponentToPrint printdata = {data} recipe={food} ref={el => (this.componentRef = el)} />
        </div>
      );
    }
  }

export default Partyprint;