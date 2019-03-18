import React from "react";
import { Table, Container, Button } from "semantic-ui-react";
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
      });
    }

      
  render() {
    const { users } = this.state;
    return (
      <div className='table-container'>
        <Table unstackable singleLine color={'violet'} size='small' style={{maxWidth: "700px", width: "80%"}}>
          <Table.Header>
            <Table.Row >
              <Table.HeaderCell>NAME</Table.HeaderCell>
              <Table.HeaderCell>LAST NAME</Table.HeaderCell>
              <Table.HeaderCell>AGE</Table.HeaderCell>
              <Table.HeaderCell className="one wide"></Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
              {users.map(user => (
                  <Table.Row key={user.id}>
                  <Table.Cell>{user.firstName}</Table.Cell>
                  <Table.Cell>{user.lastName}</Table.Cell>
                  <Table.Cell>{user.age}</Table.Cell>
                  <Table.Cell><button className="remove-user">x</button></Table.Cell>
                </Table.Row>
              ))}
          </Table.Body>
        </Table>
      </div>
  
    );
  }
}
export default UsersTable;
