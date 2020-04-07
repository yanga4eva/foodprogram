import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
 
class ComponentToPrint extends React.Component {
  render() {
      const data = this.props.printdata[0]
      const recipe = this.props.recipe
      console.log(recipe)
      console.log(data)
    return (
        <>
        <br /><br />
        <div className="col 9">
                {data.name }
            </div>
            <div className="col 9">
                { }
            </div>
            </>
    );
  }
}
 
class Partyprint extends React.Component {
    render() {
        const data = this.props.data
      return (
        <div>
          <ReactToPrint
            trigger={() => <a href="#">Print this out</a>}
            content={() => this.componentRef}
          />
          <ComponentToPrint printdata = {data} ref={el => (this.componentRef = el)} />
        </div>
      );
    }
  }

export default Partyprint;