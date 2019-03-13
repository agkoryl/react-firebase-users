import React from "react";
import { Table, Container } from "semantic-ui-react";
import '../Table/Table.css';
import db from "../../database/firebase";

class UsersTable extends React.Component {

    state = {
        users: []
    };

    componentDidMount() {
        this.fetchUsers();
    }
  
    fetchUsers() {
      db.ref("/users/").on("value", snapshot => {
        const users = [];
        Object.entries(snapshot.val()).forEach(elem => {
          const user = {
            id: elem[0],
            ...elem[1]
          };
          users.push(user);
        });
        this.setState({ users });
        console.log(users);
      });
    }
      

  render() {
    const { users } = this.state;
    return (
      <Container className='table-container'>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>NAME</Table.HeaderCell>
              <Table.HeaderCell>LAST NAME</Table.HeaderCell>
              <Table.HeaderCell>AGE</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
              {users.map(user => (
                  <Table.Row key={user.id}>
                  <Table.Cell>{user.firstName}</Table.Cell>
                  <Table.Cell>{user.lastName}</Table.Cell>
                  <Table.Cell>{user.age}</Table.Cell>
                </Table.Row>
              ))}
          </Table.Body>
        </Table>
      </Container>
    );
  }
}

export default UsersTable;
