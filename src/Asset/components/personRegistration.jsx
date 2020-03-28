import React from "react";
import PropTypes from "prop-types";
import RangePicker from "./rangePicker"
import {
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormGroup,
  FormInput,
  FormSelect,
  FormTextarea,
  Button
} from "shards-react";

class UserDeatils extends React.Component {
    constructor(props){
      super(props)
      this.state = {}
      data = {
        firstname: "fortunatus",
        lastname: "Johnson"
      }
      }
  
  insertPerson(path) {
    this.props.history.push(path)
      fetch("http://fgapiproject.herokuapp.com/person/register", {method: "POST", headers: {'Accept': 'application/json', 'Content-Type': 'application/json'}, body: {"firstname": "Fortunatus", "lastname": "Inyang"}})
       }

    render() { 
    const title = "Person Registration"
    return(
  <Card small className="mb-4">
    <CardHeader className="border-bottom">
      <h6 className="m-0">{title}</h6>
    </CardHeader>
    <ListGroup flush>
      <ListGroupItem className="p-3">
        <Row>
          <Col>
            <Form>
              <Row form>
                {/* First Name */}
                <Col md="6" className="form-group">
                  <label htmlFor="feFirstName">First Name</label>
                  <FormInput
                    name="firstname"
                    id="feFirstName"
                    placeholder="Chioma"
                    value= {this.state.firstname}
                    onChange={ e => this.setState({ firstname : e.target.value }) }
                  />
                </Col>
                {/* Last Name */}
                <Col md="6" className="form-group">
                  <label htmlFor="feLastName">Last Name</label>
                  <FormInput
                    id="feLastName"
                    placeholder="Segun"
                    value= {this.state.lastname}
                    onChange={ e => this.setState({ lastname : e.target.value }) }
                  />
                </Col>
              </Row>
              <Row form>
                {/* Fathers name */}
                <Col md="6" className="form-group">
                  <label htmlFor="feFaName">Fathers First Name</label>
                  <FormInput
                    id="faName"
                    placeholder="Segun"
                    onChange={() => {}}
                    value= {this.state.fathersFirstName}
                    onChange={ e => this.setState({ fathersFirstName : e.target.value }) }
                    
                  />
                </Col>
                {/* Fathers Last Name */}
                <Col md="6" className="form-group">
                  <label htmlFor="feFaName">Fathers Last Name</label>
                  <FormInput
                    id="faLaName"
                    placeholder="Hassan"
                    value= {this.state.fathersLastName}
                    onChange={ e => this.setState({ fathersLastName : e.target.value }) }
                  />
                </Col>
              </Row>
              <Row form>
                {/* Mothers name */}
                <Col md="6" className="form-group">
                  <label htmlFor="feFaName">Mothers First Name</label>
                  <FormInput
                    id="MoName"
                    placeholder="Ekaette"
                    value= {this.state.mothersFirstName}
                    onChange={ e => this.setState({ mothersFirstName : e.target.value }) }
                  />
                </Col>
                {/* Mothers Last Name */}
                <Col md="6" className="form-group">
                  <label htmlFor="feFaName">Mothers Last Name</label>
                  <FormInput
                    id="MoLaName"
                    placeholder="Agboh"
                    value= {this.state.mothersLastName}
                    onChange={ e => this.setState({ mothersLastName : e.target.value }) }
                  />
                </Col>
              </Row>
              <FormGroup>
                <label htmlFor="feAddress">Address</label>
                <FormInput
                  id="feAddress"
                  placeholder="Address"
                  value="1234 Main St."
                  value= {this.state.address}
                  onChange={ e => this.setState({ address : e.target.value }) }
                />
              </FormGroup>
              <Row form>
                  {/* State */}
                <Col md="4" className="form-group">
                  <label htmlFor="feInputState">State</label>
                  <FormSelect id="feInputState" value= {this.state.stateg} onChange={ e => this.setState({ stateg : e.target.value }) }>
                    <option>Choose...</option>
                    <option>Abia</option>
                    <option>Adammawa</option>
                    <option>Bauchi</option>
                    <option>Bayelsa</option>
                    <option>...</option>
                  </FormSelect>
                </Col>
                {/* City */}
                <Col md="6" className="form-group">
                  <label htmlFor="feCity">Local Government Area</label>
                  <FormInput
                    id="feCity"
                    placeholder="L.G.A"
                    value= {this.state.lga}
                    onChange={() => {}}
                    onChange={ e => this.setState({ lga : e.target.value }) }
                  />
                </Col>
                {/* Zip Code */}
                <Col md="2" className="form-group">
                  <label htmlFor="feZipCode">Date of Birth</label>
                  <RangePicker />
                </Col>
              </Row>
              <Button onClick={() => this.insertPerson()} type="submit">Register</Button>
            </Form>
          </Col>
        </Row>
      </ListGroupItem>
    </ListGroup>
  </Card>
    )}
    }



export default UserDeatils;
