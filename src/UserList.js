import React, {Component} from 'react'
import PropTypes from 'prop-types';

class UserList extends Component {
  state = {
  	showGamesPlayed: true, 
  }

  gamesPlayedToggle = () => {
    this.setState(prevState => ({
      showGamesPlayed: !prevState.showGamesPlayed
    }))
  }
  
                                
  render(){
    let mappedUsers = this.props.users.map( user => (
    	<li className='user' key={user.userName}>
          <p>Username: {user.userName}</p>
		  <p>Number of Games Played: {this.state.showGamesPlayed ? user.gamesPlayed : '*'}</p>
		</li>
		))
    return(
        <div>
      		<h1>Users</h1>
      		{this.props.users.length > 0 && (
              <div>
                  <button className="smallButton" onClick={this.gamesPlayedToggle}>
                      {this.state.showGamesPlayed ? 'Hide ' : 'Show '}
                       the Number of Games Played
                  </button>
              </div>
			)}
			<ol>
      			{mappedUsers}
    		</ol>	
      	</div>
    )
  }
}
UserList.propTypes = {
  users: PropTypes.array.isRequired,
};
export default UserList