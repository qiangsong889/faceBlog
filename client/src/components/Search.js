import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import firebase from '../firebaseAuth'

class Search extends React.Component{

    handleLogoutClick() {
        console.log('logout button been clicked')
        firebase.logout();
        //
    }

    render() {
        if(this.props.active_user){
            return (
                <div>
                    <h3>faceBlog</h3>
                    <input />
                    <button>SEARCH</button>
                    <button onClick={this.handleLogoutClick.bind(this)}>LOGOUT</button>
                </div>
            )
        }else{
            return(
                <div>
                    inside of search component this.props.active_user is false
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

 export default connect(mapStateToProps)(Search);
//
//
//