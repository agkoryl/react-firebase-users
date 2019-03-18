import React from "react";
import { Button, Container, Form, Modal } from "semantic-ui-react";

import db from "../../database/firebase";
import "../AddUser/AddUser.css";

class EditUser extends React.Component {

// constructor(props) {
//     super(props);
//     this.state = {
//         firstName: props.edit.firstName,
//         lastName: props.edit.lastName,
//         age: props.edit.age,
//         modalOpen: false
//     }
// }

  state = {
    firstName: this.props.edit.firstName,
    lastName: this.props.edit.lastName,
    age: this.props.edit.age,
    modalOpen: false
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value});
  };

  handleEditUserInFirebase = event => {
    db.ref(`/users/${this.props.edit.id}`).set( {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      age: this.state.age,
    });
    this.handleClose();
  };

  handleOpen = () => this.setState({ modalOpen: true });

  handleClose = () => this.setState({ modalOpen: false });

  render() {
    return (
      <Modal
        trigger={
          <button className="medium edit-button" onClick={this.handleOpen}>
            edit
          </button>
        }
        open={this.state.modalOpen}
        onClose={this.handleClose}
      >
        <Modal.Header>Add a new user</Modal.Header>
        <Modal.Content>
          <Container className="text container">
            <Form>
              <Form.Field>
                <label>First Name</label>
                <input
                  placeholder="First Name"
                  name="firstName"
                  onChange={this.handleChange}
                  defaultValue={this.props.edit.firstName}
                />
              </Form.Field>
              <Form.Field>
                <label>Last Name</label>
                <input
                  placeholder="Last Name"
                  name="lastName"
                  onChange={this.handleChange}
                  defaultValue={this.props.edit.lastName}
                />
              </Form.Field>
              <Form.Field>
                <label>Age</label>
                <input
                  placeholder="Age"
                  name="age"
                  onChange={this.handleChange}
                  defaultValue={this.props.edit.age}
                />
              </Form.Field>
              <Button
                className="green medium"
                onClick={this.handleEditUserInFirebase}
              >
                Edit
              </Button>
            </Form>
          </Container>
        </Modal.Content>
      </Modal>
    );
  }
}

export default EditUser;
