import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import firebase from '../firebaseAuth'
import { activeUser } from '../actions'
import Login from './Login'
import base from '../firebaseAuth'
import Search from './Search'
import Options from './Options'
import selectUser from '../actions'
import axios from 'axios'


class App extends React.Component {
  componentWillMount() {
    firebase.auth.onAuthStateChanged(user=> {
        if (user) {
          axios.get('api/user', {
            params: {
                uid: user.uid,
                displayName: user.displayName    
            }
          })
          .then(response=> {
              console.log('successfully fetch data of user from server here is the data', response.data)
              this.props.activeUser(response.data);
          })
          .catch(err=> {
              console.log('having problem fetching users data from server',err)
          })
        } else {
          this.props.activeUser(null);
        }
      })
}
  
  render() {
      return (
        <div>
        {
          this.props.active_user ? 
          <div>
          <Search />
          <Options />
        </div>
        :
        <div>
          <Login />
        </div>
       }
      </div>
    )
  }
}

function mapStateToProps(state) {
    return {
        active_user: state.active_user
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
             activeUser: activeUser,
             selectUser: selectUser 
           }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(App)