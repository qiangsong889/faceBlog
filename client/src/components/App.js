import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import firebase from '../firebaseAuth'
import { activeUser } from '../actions'
import Login from './Login'
import base from '../firebaseAuth'
import Search from './Search'




class App extends React.Component {
  componentWillMount() {
    firebase.auth.onAuthStateChanged(user=> {
        if (user) {
          this.props.activeUser(user);
        } else {
          this.props.activeUser(null);
        }
      })
}
  
  render() {
      return (
        <div>
        {
          this.props.active_user ? <div>
          <Search />
          {this.props.active_user.displayName} has logged innn!!!
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
             activeUser: activeUser
           }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(App)