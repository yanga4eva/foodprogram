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
      }
  
  insertPerson(path) {
    this.props.history.push(path)
      fetch("http://fgapiproject.herokuapp.com/person/register", {method: "POST", headers: {'Accept': 'application/json', 'Content-Type': 'application/json'}, body: this.state})
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
                    value= {state.firstname}
                  />
                </Col>
                {/* Last Name */}
                <Col md="6" className="form-group">
                  <label htmlFor="feLastName">Last Name</label>
                  <FormInput
                    id="feLastName"
                    placeholder="Segun"
                    value= {state.lastname}
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
                    value= {state.fathersFirstName}
                  />
                </Col>
                {/* Fathers Last Name */}
                <Col md="6" className="form-group">
                  <label htmlFor="feFaName">Fathers Last Name</label>
                  <FormInput
                    id="faLaName"
                    placeholder="Hassan"
                    value= {state.fathersLastName}
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
                    value= {state.mothersFirstName}
                    onChange={() => {}}
                  />
                </Col>
                {/* Mothers Last Name */}
                <Col md="6" className="form-group">
                  <label htmlFor="feFaName">Mothers Last Name</label>
                  <FormInput
                    id="MoLaName"
                    placeholder="Agboh"
                    value= {state.mothersLastName}
                    onChange={() => {}}
                  />
                </Col>
              </Row>
              <FormGroup>
                <label htmlFor="feAddress">Address</label>
                <FormInput
                  id="feAddress"
                  placeholder="Address"
                  value="1234 Main St."
                  value= {state.address}
                  onChange={() => {}}
                />
              </FormGroup>
              <Row form>
                  {/* State */}
                <Col md="4" className="form-group">
                  <label htmlFor="feInputState">State</label>
                  <FormSelect id="feInputState" value= {state.stateg}>
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
                    value= {state.lga}
                    onChange={() => {}}
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
