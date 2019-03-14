import React, { Component } from "react";

import "semantic-ui-css/semantic.min.css";

import "./App.css";

import AddUser from "./AddUser/AddUser";
import UsersTable from "./Table/Table";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddUser />
        <UsersTable />
      </div>
    );
  }
}

export default App;

// {users.map(user => (
//   <div>
//     {user.firstName}
//     {user.lastName}
//     {user.age}
//   </div>
// ))}
