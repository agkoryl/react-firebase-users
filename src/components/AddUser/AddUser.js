import React from "react";
import { Button, Container, Form, Modal } from "semantic-ui-react";

import db from "../../database/firebase";
import "./AddUser.css";

class AddUser extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    age: null
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleAddUserToFirebase = event => {
    db.ref('/users').push(this.state);
  };

  componentDidMount() {
      console.log(this.state);
  }

  render() {
    return (
        <Modal
          trigger={
            <Button className="green medium add-button">Add a new user</Button>
          }
        >
          <Modal.Header>Add a new user</Modal.Header>
          <Modal.Content>
            <Container className="text container">
              <Form>
                <Form.Field>
                  <label>First Name</label>
                  <input placeholder="First Name" name="firstName" onChange={this.handleChange} />
                </Form.Field>
                <Form.Field>
                  <label>Last Name</label>
                  <input placeholder="Last Name" name="lastName" onChange={this.handleChange} />
                </Form.Field>
                <Form.Field>
                  <label>Age</label>
                  <input placeholder="Age"  name="age" onChange={this.handleChange} />
                </Form.Field>
                <Button
                  className="green medium"
                  onClick={this.handleAddUserToFirebase}
                >
                  Add
                </Button>
              </Form>
            </Container>
          </Modal.Content>
        </Modal>
    )
 
  }}

export default AddUser;
