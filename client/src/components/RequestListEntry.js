import React from 'react'
import axios from 'axios'

class RequestListEntry extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            user: {}
        }
    }
    
    componentWillMount() {
        console.log('inside of REQUESTLISTENTRY , this is the request', this.props.request)
        axios.get('api/targetUser', {
            params: {userId: this.props.request.userId}
        })
        .then(res=> {
            console.log('GOT ALL INFO OF USER SEND ADDING FRIEND', res.data)
            this.setState({
                user:res.data[0]
            })
        })
        .catch(err=> {console.log('Error getting users info in RequestListEntry, ',err)})
    }

    render() {
        return(
            <div>
                {/* friendId:{this.props.request.friendId}<br /> */}
                {this.state.user.displayName} wants to add you as friends <button>accept</button><button>decline</button><br />
                {/* isFriend:{this.props.request.isFriend}<br /> */}
            </div>
        )
    }
}

export default RequestListEntry
