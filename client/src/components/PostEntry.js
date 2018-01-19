import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import PostCommentsEntry from './PostCommentsEntry'

class PostEntry extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            boxShowing: false,
            comments:[]
        }
    }
    componentWillMount() {
        this.update()
    }
    update() {
        axios.get('api/comment', {
            params: {
                postId: this.props.post.id
            }
        })
             .then(response=> {
                 this.setState({
                     comments: response.data
                })
                    
            // console.log('here shouyld be all the comments of each repo,', this.state.comments)
             })
             .catch(err=> {
                 console.log('Error having problem getting comment of post', err)
             })
    }
    handleButtonClick() {
        console.log('button been clikced', this.state.boxShowing)
        this.setState({
            boxShowing:  !this.state.boxShowing
        });
    }
    handleSubmitBottonClick(){

        let payload = {
            comments: document.getElementById('textarea').value,
            userId: this.props.userLoad.id,
            postId: this.props.post.id
        }
        axios.post('api/comment', payload)
             .then(res=> {
                // console.log('successfully post comment to server here is the response', res)
                this.setState({
                    boxShowing: false
                })
                this.update();
             })
             .catch(err=> {
                 console.log('Error send comments', err)
             })
        console.log('here is the payload', payload)
    }

    render() {
        // console.log('passssssing it down to postcommentsEntry,', this.state.comments)
        return(
            <div>
                {
                    <div>
                        post:{this.props.post.post}
                        {
                            this.props.post.img?
                            <div>
                                img: {this.props.post.img}
                            </div>
                            :
                            <div>
                            </div>

                        }
                    </div>   
                }
                {
                    this.state.comments?
                    <div>
                        {this.state.comments.map(comment=> {
                           return <PostCommentsEntry key={comment.id} comment={comment} />
                        })}                       
                    </div>
                    :
                    <div>
                    </div>
                }
                {
                    this.state.boxShowing?
                    <div>
                        <button onClick={this.handleButtonClick.bind(this)} >comment</button>
                        <textarea id='textarea' />
                        <button onClick={this.handleSubmitBottonClick.bind(this)}>submit</button>
                    </div>  
                    :
                    <div>
                        <button onClick={this.handleButtonClick.bind(this)}>comment</button>
                    </div> 
                }
                <br /><br /><br /><br /><br />
            </div>   
        )
    }
}
function mapStateToProps(state){
  return {
      active_user: state.active_user,
      userLoad: state.userLoad
  }
}

export default connect(mapStateToProps)(PostEntry)