import React from 'react'
import axios from 'axios'

class PostCommentsEntry extends React.Component {
    constructor(props){
        super(props)
        this.state={
            user: {}
        }
    }
    componentWillMount() {

        axios.get('api/targetUser',{
            params: {userId: this.props.comment.userId}
        })
        .then(res=> {
            this.setState({
                user: res.data[0]
            })
        })
        .catch(err=> {
            console.log('Error having problem fetching the comments of post,', err)
        })
    }

    render(){

        return(
            <div>
              {this.state.user.userName}: {this.props.comment.comments}
            <br />
            </div>
        )
    }
}


export default PostCommentsEntry