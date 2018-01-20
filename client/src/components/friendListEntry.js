import React from 'react'
import axios from 'axios'
import { bindActionCreators } from 'redux'
import { selectUser,selectOption } from '../actions'
import { connect } from 'react-redux'


class FriendListEntry extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            friendName: ''
        }
    }
    componentWillMount() {
        axios.get('api//targetUser', {
            params: {userId: this.props.friend.friendId}
        })
        .then(res=> {
            console.log('FRIENDLISTENTRY============>', res)
            this.setState({
                friendName: res.data[0].displayName
            })
        })
        .catch(err=> {console.log('Error fetching friend infomation', err)})
    }
    checkFriend() {
        // this.props.selectUser(this.props.friend.id);
        console.log('clicked', this.props.friend)
        this.props.selectUser(this.props.friend.friendId)
        this.props.selectOption('user')
    }

    render() {
        return (
            <div>
                
                {
                    this.props.friend.isFriend === 'yes' ?
                    <div onClick={(e)=>this.checkFriend()}>
                        {this.state.friendName}
                    </div>
                    :
                    <div>
                        each friend
                    </div>
                }
            </div>
        )
    }
}
function mapStateToProps(state) {
    return{}
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        selectUser: selectUser,
        selectOption: selectOption
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(FriendListEntry)