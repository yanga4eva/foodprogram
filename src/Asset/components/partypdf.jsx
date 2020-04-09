import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
 
class ComponentToPrint extends React.Component {
  render() {
      const data = this.props.recipedata
      const {recipe} = this.props
    return (
        <>
        <div className="col 9">
            <h4>{ }</h4>
                <h3>Dish Name : {recipe.name}</h3>
                <br />
                <h4>History</h4>
                <p>{recipe.history}</p>
            <br />
                <h4>Recipe</h4>
                <p>{recipe.recipe}</p>
            <br />
                <h4>Procedure</h4>
                <p>{recipe.procedure}</p>
            </div>
            </>
    );
  }
}

 
class Partyprint extends React.Component {
    render() {
        const data = this.props.data
        const {recipe} = this.props
      return (
        <div>
          <ReactToPrint
            trigger={() => <a href="#">Print this out</a>}
            content={() => this.componentRef}
          />
          <ComponentToPrint printdata = {data} recipe={recipe} ref={el => (this.componentRef = el)} />
        </div>
      );
    }
  }

export default Partyprint;