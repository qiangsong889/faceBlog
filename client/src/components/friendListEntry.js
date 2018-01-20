import React from 'react'

class FriendListEntry extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            friendName: ''
        }
    }
    componentWillMount() {
        axios.get('api//targetUser', {
            params: {friendId: friend.friendId}
        })
        .then(res=> {
            this.setState({
                friendName: res.data.displayName
            })
        })
        .catch(err=> {console.log('Error fetching friend infomation', err)})
    }

    render() {
        return (
            <div>
                {
                    this.props.friend.isFriend === 'yes' ?
                    <div>
                        {this.state.friendName}
                    </div>
                    :
                    <div>
                    </div>
                }
            </div>
        )
    }
}

export default FriendListEntry