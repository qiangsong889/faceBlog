import React from 'react'
import { connect } from 'react-redux'

class SearchFriends extends React.Component {
    addFriend (name) {
        console.log('name been clicked',name)
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
        friendsSearch: state.friendsSearch
    }
}


export default connect(mapStateToProps)(SearchFriends)