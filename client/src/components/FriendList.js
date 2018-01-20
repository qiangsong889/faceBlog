import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loadFriends } from '../actions'
import FriendListEntry from './friendListEntry'

class FriendList extends React.Component {
    
    componentWillMount() {
        this.getFriends()
    }
    getFriends() {
        axios.get('api/friendList', {
            params: {userId: this.props.active_user.id}
        })
        .then(res=> {
            console.log('tring to get friend, here is the result==>', res)
            this.props.loadFriends(res.data)
            // let isFriend = (res.data)
        })
        .catch(err=> {console.log('Error getting friendList', err)})
    }
    render() {

        return (
            
            <div>
            {
              this.props.friendsLoad?
              <div>
                  {this.props.friendsLoad.map(friend=> {
                      <FriendListEntry friend={friend} key={friend.id}/>
                  })}
              </div>
              :
              <div>
              </div>
            }
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        active_user: state.active_user,
        friendsLoad: state.friendsLoad
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        loadFriends: loadFriends
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(FriendList)
