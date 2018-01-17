import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import firebase from '../firebaseAuth'
import activeUser from '../actions'
import Login from './Login'




class App extends React.Component {
  componentWillMount() {
    firebase.auth.onAuthStateChanged(user=> {
        if (user) {
          this.props.activeUser(user);
        } else {
          return (
            <div>
              <Login />
            </div>
          )
        }
      })
  }
    
  render() {
    if (this.props.active_user) {
      return (
        <div>
          {/* <Search />
          <Option /> */}
          {this.props.active_user.displayName} has logged in!!!
        </div>
      )
    } else {
      return (
        <div>
          <Login />
        </div>
      )
    }
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
           })
}

export default connect(mapStateToProps, matchDispatchToProps)(App)