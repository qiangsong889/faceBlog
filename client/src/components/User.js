import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux' 
import { selectUser,loadUser } from '../actions'
import axios from 'axios'
import Posts from './Posts'
import Bio from './Bio'



class User extends React.Component {
    componentWillMount() {
        if(!this.props.userUID){
            this.props.selectUser(this.props.active_user.userName)
            this.props.loadUser(this.props.active_user)
        }else{

            // this.getUsersInfoFromServer();
            axios.get('api/user', {
                params:{uid: this.props.userUID}
            })
            .then(res=> {
                this.props.loadUser(res.data)
            })
            .catch(err=>{console.log('Error fetching uses information',err)})
        }
    }
    // getUsersInfoFromServer()  {
    //     let uid=()=> {
    //         if(this.props.userLoad){
    //             return this.props.userLoad.userName
    //         }else{
    //             this.props.loadUser(this.props.active_user)
    //             return this.props.userLoad.userName
    //         }

    //     }
    //     console.log('inside of User componentWillMount this users uid should be activeusers uid+==>>',this.props.active_user , uid)
    //     if(!this.props.userLoad){
    //         this.props.loadUser(this.props.active_user)
    //     }
    // }

    render() {
      return (
        <div>
        {
            this.props.userLoad ? 
            <div>
                this.props.userInfo is loaded!!!!
                <Posts />
                <Bio />
                {/* <Friends /> */}
            </div>
            :
            <div>
                waiting for loading or signing selectUser
            </div>   
        }
        </div>
      )
    }
}
function mapStateToProps(state) {
    return {
        active_user: state.active_user,
        userUID: state.userUID,
        userLoad: state.userLoad,
        userUID: state.userUID
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        selectUser: selectUser,
        loadUser: loadUser,
        selectUser: selectUser
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(User)