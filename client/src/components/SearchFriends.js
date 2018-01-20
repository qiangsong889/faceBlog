import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

class SearchFriends extends React.Component {
    addFriend (target) {
        let isFriend = false;
        if(this.props.active_user.id === target.id) {
            isFriend = true
            return;
        }else{
            this.props.friendsLoad.forEach(friend=> {
                    if(friend.isFriend === 'yes' && target.id === friend.id){
                        isFriend = true
                    }
            })
        }
        if(!isFriend) {
            axios.post('api/friendList', {
                userId: this.props.active_user.id,
                friendId: target.id
            })
            .then(res=> {

                console.log('you just send a add friend request', res)
                return;
            })
            .catch(err=> {console.log('Error adding friend', err)})
        }
        // if(
        //     console.log('button clicked', this.props.friendsLoad)
        // )

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
                                    <div >{friend.displayName}<button onClick={(e)=>this.addFriend(friend)}>add</button></div>
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
        active_user: state.active_user,
        friendsLoad: state.friendsLoad
    }
}


export default connect(mapStateToProps)(SearchFriends)