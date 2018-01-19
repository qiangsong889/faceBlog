import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import firebase from '../firebaseAuth'
import { selectUser, searchFriends } from '../actions'
import axios from 'axios'

class Search extends React.Component{

    handleLogoutClick() {
        console.log('logout button been clicked')
        this.props.selectUser(null);
        firebase.logout();
        //
    }
    handleSearch(){
        console.log('searching for ', document.getElementById('searchName').value)
        axios.get('api/search', {
            params:{displayName: document.getElementById('searchName').value}
        })
        .then(res=> {
            console.log('here is the result', res.data)
            this.props.searchFriends(res.data)
        })
        .catch(err=> {console.log('Error searching', err)})
    }

    render() {
        if(this.props.active_user){
            return (
                <div>
                    <h3>faceBlog</h3>
                    <input id="searchName"/>
                    <button onClick={this.handleSearch.bind(this)}>SEARCH</button>
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

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
             selectUser: selectUser,
             searchFriends: searchFriends
           }, dispatch)
}

 export default connect(mapStateToProps,matchDispatchToProps)(Search);
//
//
//