import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import axios from 'axios'
import { toggleCommentAction, loadPosts } from '../actions'
import PostEntry from './PostEntry'

class Posts extends React.Component{
    // constructor(props) {
    //     super(props)
    // }
    componentWillMount() {
        this.update();
    }
    update() {
        axios.get('api/post', {
            params: {userId : this.props.userLoad.id}
        })
        .then(res=> {
            this.props.loadPosts(res.data);
            // console.log('here should be array of posts', this.props.postsLoad)

        })
        .catch(err=> {console.log('Error fetching posts', err)})
    }
    handleSubmitPostButtonClick() {
    //   let post = document.getElementById('postText').value
      let payload = {
        post: document.getElementById('postText').value,
        img: null,
        userId: this.props.userLoad.id
      }
      console.log('here is the payload!!===>>>>', payload)
      axios.post('api/post', payload)
           .then(res=> {
               console.log('successfully post post to server')
            //    this.props.getUsersInfoFromServer();
               this.update()
               document.getElementById('postText').value='';
           })
           .catch(err=> {
               console.log('getting error tring to submit post, ===>>',err)
           })
    }
    postBox() {
        console.log('here is the this.props.userLoad and active_user', this.props.userLoad, this.props.active_user)
        return(           
            <div>
            {
                this.props.active_user.userName === this.props.userLoad.userName ?
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
        console.log('Posts component has been run, current user and userLoad', this.props)
        return(
            <div>
                {
                 this.postBox()
                }               
                {
                !this.props.postsLoad?
                <div>
                    this.props.postsLoad is null, something went wrong
                </div>   
                :
                <div>
                {this.props.postsLoad.map(post => {
                  return <PostEntry update={this.props.getUsersInfoFromServer} post={post} key={post.id}/>    
                })}
                </div>
                }
            
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        postsLoad: state.postsLoad,
        userLoad: state.userLoad,
        active_user: state.active_user,
        toggleComment: state.toggleComment,
    }
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({
      toggleCommentAction: toggleCommentAction,
      loadPosts: loadPosts
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Posts)