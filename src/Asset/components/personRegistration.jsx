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
      this.state = {
        firstname: "",
        lastname: "",
        fathersfirstname: '',
        fatherslastname:'',
        mothersfirstname: '',
        motherslastname: '',
        address: '',
        stateg: '',
        lga:'',
        isLoaded: false,
        
      }
      
      }
  
  async insertPerson() {
    console.log(this.state)
    let data = this.state
    try {
      let result = await fetch ('https://fgapiproject.herokuapp.com/person/register', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      console.log('Result: ' + result)
    } catch(e) {
      console.log(e)
    }
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
                    type="text"
                    onChange={(data) => {this.setState({firstname:data.target.value})}}
                    value= {this.state.firstname}
                  />
                </Col>
                {/* Last Name */}
                <Col md="6" className="form-group">
                  <label htmlFor="feLastName">Last Name</label>
                  <FormInput
                    name="lastname"
                    id="feLastName"
                    placeholder="Segun"
                    value= {this.state.lastname}
                    onChange={(data) => {this.setState({lastname:data.target.value})}}
                  />
                </Col>
              </Row>
              <Row form>
                {/* Fathers name */}
                <Col md="6" className="form-group">
                  <label htmlFor="feFaName">Fathers First Name</label>
                  <FormInput
                  name="fathersfirstname"
                    id="faName"
                    placeholder="Segun"
                    value= {this.state.fathersfirstname}
                    onChange={(data) => {this.setState({fathersfirstname:data.target.value})}}
                  />
                </Col>
                {/* Fathers Last Name */}
                <Col md="6" className="form-group">
                  <label htmlFor="feFaName">Fathers Last Name</label>
                  <FormInput
                    name="fatherslastname"
                    id="faLaName"
                    placeholder="Hassan"
                    onChange={(data) => {this.setState({fatherslastname:data.target.value})}}
                    value= {this.state.fatherslastname}
                  />
                </Col>
              </Row>
              <Row form>
                {/* Mothers name */}
                <Col md="6" className="form-group">
                  <label htmlFor="feFaName">Mothers First Name</label>
                  <FormInput
                    name="mothersfirstname"
                    id="MoName"
                    placeholder="Ekaette"
                    onChange={(data) => {this.setState({mothersfirstname:data.target.value})}}
                    value= {this.state.mothersfirstname}
                  />
                </Col>
                {/* Mothers Last Name */}
                <Col md="6" className="form-group">
                  <label htmlFor="feFaName">Mothers Last Name</label>
                  <FormInput
                    name="motherslastname"
                    id="MoLaName"
                    placeholder="Agboh"
                    onChange={(data) => {this.setState({motherslastname:data.target.value})}}
                    value= {this.state.motherslastname}
                  />
                </Col>
              </Row>
              <FormGroup>
                <label htmlFor="feAddress">Address</label>
                <FormInput
                  name="address"
                  id="feAddress"
                  placeholder="Address"
                  onChange={(data) => {this.setState({address:data.target.value})}}
                  value= {this.state.address}
                />
              </FormGroup>
              <Row form>
                  {/* State */}
                <Col md="4" className="form-group">
                  <label htmlFor="feInputState">State</label>
                  <FormSelect id="feInputState" name="stateg" value= {this.state.stateg} onChange={(data) => {this.setState({stateg:data.target.value})}}>
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
                    name="lga"
                    id="feCity"
                    placeholder="L.G.A"
                    onChange={(data) => {this.setState({lga:data.target.value})}}
                    value= {this.state.lga}
                  />
                </Col>
                {/* Zip Code */}
                <Col md="2" className="form-group">
                  <label htmlFor="feZipCode">Date of Birth</label>
                  <RangePicker />
                </Col>
              </Row>
              <Button onClick={() => this.insertPerson()}>Register</Button>
            </Form>
          </Col>
        </Row>
      </ListGroupItem>
    </ListGroup>
  </Card>
    )}

    handleChange(e) {
      this.setState({ value: e.target.value });
    }

    }



export default UserDeatils;
