import React, { Component } from 'react';
import './App.css';
import { Sidebar } from "./containers/Sidebar"
import { MessagesList } from "./containers/MessagesList"
import { AddMessage } from "./containers/AddMessage"
import { AddUser } from "./containers/AddUser"

class App extends Component {
  render() {
    return (
      <div id="container">
        <Sidebar />
          <section>
            <MessagesList />
            <AddMessage />
            <AddUser />
          </section>
      </div>
    );
  }
}

export default App;
