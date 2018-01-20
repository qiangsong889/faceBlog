import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import firebase from '../firebaseAuth'
import { selectUser, searchFriends } from '../actions'
import axios from 'axios'
import RequestListEntry from './RequestListEntry'

class Search extends React.Component{
    constructor(props) {
        super(props)
        this.state ={
            showRequest : false,
            requests: []
        }
    }
    componentWillMount () {

        this.update();
    }
    update() {
        axios.get('api/friendRequest', {
            params: {friendId: this.props.active_user.id, isFriend: 'pending'}
        })
        .then(res=> {
            console.log('inside of search, trying to search friend request, here is the request', res.data)
            this.setState({
                requests: res.data
            })
        })
        .catch(err=> {console.log('having problem searching friend request,' ,err)})
    }
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

    showRequest() {
        console.log('show request button clicked')
        this.setState({
            showRequest: !this.state.showRequest
        })
    }
    friendRequest() {
        return(
            <div>
                {
                    this.state.requests&&this.state.showRequest?
                    <div>
                        {this.state.requests.map(request => {
                           return <RequestListEntry friendId={this.props.active_user.id} request={request} key={request.id}/>
                        })}
                    </div>
                    :
                    <div>
                    </div>
                }
            </div>
        )
    }

    render() {
        if(this.props.active_user){
            return (
                <div>
                    <h3>faceBlog</h3>
                    <input id="searchName"/>
                    <button onClick={this.handleSearch.bind(this)}>SEARCH</button>
                    <button onClick={this.handleLogoutClick.bind(this)}>LOGOUT</button>
                    <button onClick={(e)=>this.showRequest()}> showFriendRequest </button>
                    {this.friendRequest()}
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
        active_user: state.active_user,
        friendsLoad: state.friendsLoad
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