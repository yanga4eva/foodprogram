import React from "react";
import {Link} from 'react-router-dom';
import classNames from "classnames";
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
  InputGroup,
  DatePicker,
  Button
} from "shards-react";
import "../../Asset/range-date-picker.css";

class UserDeatils extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        firstname: undefined,
        lastname: undefined,
        fathersFirstName: undefined,
        fathersLastName: undefined,
        mothersFirstName: undefined,
        mothersLastName: undefined,
        address: undefined,
        stateofOrigin: undefined,
        lga:undefined,
        DOB: undefined,
        isLoaded: false,
        
      }
      
      this.handleStartDateChange = this.handleStartDateChange.bind(this);

      }

      handleStartDateChange(value) {
        this.setState({
          ...this.state,
          ...{ DOB: new Date(value) }
        })
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
    const { className } = this.props;
    const classes = classNames(className, "d-flex", "my-auto", "date-range");
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
                <Col md="6"lastname="form-group">
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
                  name="fathersFirstName"
                    id="faName"
                    placeholder="Segun"
                    value= {this.state.fathersFirstName}
                    onChange={(data) => {this.setState({fathersFirstName:data.target.value})}}
                  />
                </Col>
                {/* Fathers Last Name */}
                <Col md="6" className="form-group">
                  <label htmlFor="feFaName">Fathers Last Name</label>
                  <FormInput
                    name="fathersLastName"
                    id="faLaName"
                    placeholder="Hassan"
                    onChange={(data) => {this.setState({fathersLastName:data.target.value})}}
                    value= {this.state.fathersLastName}
                  />
                </Col>
              </Row>
              <Row form>
                {/* Mothers name */}
                <Col md="6" className="form-group">
                  <label htmlFor="feFaName">Mothers First Name</label>
                  <FormInput
                    name="mothersFirstName"
                    id="MoName"
                    placeholder="Ekaette"
                    onChange={(data) => {this.setState({mothersFirstName:data.target.value})}}
                    value= {this.state.mothersFirstName}
                  />
                </Col>
                {/* Mothers Last Name */}
                <Col md="6" className="form-group">
                  <label htmlFor="feFaName">Mothers Last Name</label>
                  <FormInput
                    name="mothersLastName"
                    id="MoLaName"
                    placeholder="Agboh"
                    onChange={(data) => {this.setState({mothersLastName:data.target.value})}}
                    value= {this.state.mothersLastName}
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
                  <FormSelect id="feInputState" name="stateofOrigin" value= {this.state.stateofOrigin} onChange={(data) => {this.setState({stateofOrigin:data.target.value})}}>
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
                  <InputGroup className={classes}>
                  <DatePicker
                    name="DOB"
                    size="sm"
                    selected={this.state.DOB}
                    onChange={this.handleStartDateChange}
                    placeholderText="Date of Birth"
                    dropdownMode="select"
                    className="text-center"
        />
        </InputGroup>
                </Col>
              </Row>
              <Button onClick={() => this.insertPerson()} component={Link} to="./country-info">Register</Button>
            </Form>
          </Col>
        </Row>
      </ListGroupItem>
    </ListGroup>
  </Card>
    )}
    }


export default UserDeatils;
