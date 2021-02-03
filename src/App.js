import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddUser from './AddUser';
import UserList from './UserList';


class App extends Component {
  state = {
    users: []
  }

  createUser = (userObj) => {
    userObj.gamesPlayed = 0;
    this.setState(prevState => ({
      users: [...prevState.users, userObj]
    }))
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
    	<AddUser 
    		users={this.state.users}
			createUser={this.createUser}/>
    	<UserList
			users={this.state.users}/>
      </div>
    );
  }
}

export default App;
