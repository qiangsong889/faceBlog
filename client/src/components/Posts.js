import React from 'react'
import { connect } from 'react-redux'

class Posts extends React.Component{

    render() {
        return(
            <div>
                {this.props.userLoad.posts.map(post => {
                    return (<div key={post.id}>
                              {/* post: {post.post} */}
                                {
                                    post.img ? 
                    
                                        <div>
                                            img:{post.img}
                                        </div>
                                    :                                    
                                        <div>
                                        </div>
                                
                                    

                                }
                           </div>)
                })}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        userLoad: state.userLoad
    }
}

export default connect(mapStateToProps)(Posts)