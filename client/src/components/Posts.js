import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import axios from 'axios'
import { toggleCommentAction } from '../actions'
import PostEntry from './PostEntry'

class Posts extends React.Component{
    constructor(props) {
        super(props)
    }
    handleSubmitPostButtonClick() {
    //   let post = document.getElementById('postText').value
      let payload = {
        post: document.getElementById('postText').value,
        img: null,
        userId: this.props.userLoad.user[0].id
      }
      console.log('here is the payload!!===>>>>', payload)
      axios.post('api/post', payload)
           .then(res=> {
               console.log('successfully post post to server')
               this.props.getUsersInfoFromServer();
               document.getElementById('postText').value='';
           })
           .catch(err=> {
               console.log('getting error tring to submit post, ===>>',err)
           })
    }
    postBox() {
        return(           
            <div>
            {
                this.props.active_user.user[0].userName === this.props.userLoad.user[0].userName ?
                <div>
                    <textarea id='postText' />
                    <button id='button-submitPost' onClick={this.handleSubmitPostButtonClick.bind(this)}>Submit Post</button>
                </div>
                :
                <div>
                </div>
            }
            <br />
            <br />
            <br />
            </div>
        )
    }
    // commentBox(postId) {
    //     return(
    //         <div>
    //             {
    //             !this.props.toggleComment.status?
    //             <div>
    //             </div>
    //             :
    //             <div>
    //             <textarea id='commentText' defaultValue='comment goes here'/>
    //             <button id='button-submitComment' value={postId} onClick={this.handleSubmitCommentButtonClick.bind(this)}>submit comments</button>
    //             </div>  
    //             }
    //         </div>
    //     )
    
    // }
    // commentBox(postId) {
    //     return(
    //         <div className="commentBox">

    //         </div>
    //     )
    // }

    // handleToggleButtonClick(id) {
    //     console.log('toggle button clicked',id)
    //     this.props.toggleCommentAction(id)
    // }

    render() {
        console.log('Posts component has been run, current user and userLoad', this.props.active_user, this.props.userLoad)
        return(
            <div>
                {
                 this.postBox()
                }               
                {this.props.userLoad.posts.map(post => {
                  return <PostEntry update={this.props.getUsersInfoFromServer} post={post} key={post.id}/>    
                })}
            
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        userLoad: state.userLoad,
        active_user: state.active_user,
        toggleComment: state.toggleComment
    }
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({
      toggleCommentAction: toggleCommentAction
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Posts)