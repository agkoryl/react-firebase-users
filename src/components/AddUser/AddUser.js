import React from 'react';
import { Button, Container, Form, Modal } from "semantic-ui-react";

import './AddUser.css';


function AddUser(props) {
    return (
        <Modal trigger={<Button className="green medium add-button">Add a new user</Button>}>
          <Modal.Header>Add a new user</Modal.Header>
          <Modal.Content>
            <Container className="text container">
              <Form>
                <Form.Field>
                  <label>First Name</label>
                  <input placeholder="First Name" />
                </Form.Field>
                <Form.Field>
                  <label>Last Name</label>
                  <input placeholder="Last Name" />
                </Form.Field>
                <Form.Field>
                  <label>Age</label>
                  <input placeholder="Age" />
                </Form.Field>
                <Button type="submit" className="green medium">
                  Add
                </Button>
              </Form>
            </Container>
          </Modal.Content>
        </Modal>
    )
  }

  export default AddUser;
