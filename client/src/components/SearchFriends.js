import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

class SearchFriends extends React.Component {
    addFriend (friend) {
        // console.log('name been clicked',friend)
        axios.post('api/friendList', {
            userId: this.props.active_user.id,
            friendId: friend.id
        })
        .then(res=> {
            console.log('you just added a friend res==>>', res)
        })
        .catch(err=> {console.log('Error adding friend', err)})
    }
    render() {
        return (
            <div>
                {
                    this.props.friendsSearch?
                    <div>
                        {this.props.friendsSearch.map((friend)=> {
                            return(
                                <li key={friend.id}>
                                    <div onClick={(e)=>this.addFriend(friend)}>{friend.displayName}</div>
                                    <div> location:{friend.location}</div>
                                    <div> school: {friend.school}</div>
                                </li>
                            )
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

function mapStateToProps(state) {
    return {
        friendsSearch: state.friendsSearch,
        active_user: state.active_user
    }
}


export default connect(mapStateToProps)(SearchFriends)