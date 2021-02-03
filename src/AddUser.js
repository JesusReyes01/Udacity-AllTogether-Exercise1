import React, {Component} from 'react';
import PropTypes from 'prop-types';

class AddUser extends Component {
  state = {
    user: {firstName: '',
           lastName: '',
           userName: '',
          },
    userExists: false,
  }
  
  handleUserInput = (event) => {
  	event.preventDefault()
    let name = event.target.name
    let value = event.target.value
    this.setState({...this.state, user: {...this.state.user, [name]: value}})
  }

  resetInputs = () => {
    this.setState(() => ({ user: {firstName: '', lastName: '', userName: ''}}))
  }

  inputIsEmpty = () => {
    return this.state.user.firstName === '' || this.state.user.lastName === '' || this.state.user.userName === '';
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let userNamesArray = []
    this.props.users.map(e => userNamesArray.push(e.firstName))
    if(userNamesArray.includes(this.state.user.userName)){
     
      this.setState(() => ({
      userExists: true,
      }));
      
      this.resetInputs();

    } else{
      this.setState(() => ({
      userExists: false,
      }));
      this.props.createUser(this.state.user)
      this.resetInputs()
    }
  }
  render(){
  	return (
    		<div>
             	<h1>New User</h1>
             	<form onSubmit={this.handleSubmit}>
    				<div>
                        <input
                            type = 'text'
                            placeholder = 'First Name'
                            name = 'firstName'
                            value = {this.state.user.firstName}
                            onChange = {this.handleUserInput}
                        />
                        <input
                            type = 'text'
                            placeholder = 'Last Name'
                            name = 'lastName'
                            value = {this.state.user.lastName}
                            onChange = {this.handleUserInput}
                        />
                        <input
                            type = 'text'
                            placeholder = 'User Name'
                            name = 'userName'
                            value = {this.state.user.userName}
                            onChange = {this.handleUserInput}
                        />
					</div>
					<button disabled = {this.inputIsEmpty()}>Add</button>
				</form>
				{this.state.userExists ? (
          			<p className="error">You cannot add a user that already exists.</p>
        		) : (
          			''
        		)}
            </div>
    )
  }
}

AddUser.propTypes = {
  onAddUser: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
};

export default AddUser;