import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux' 
import { selectUser } from '../actions'
import axios from 'axios'


class User extends React.Component {
    componentWillMount() {
        this.getUsersInfoFromServer();
    }
    getUsersInfoFromServer()  {
        let uid = this.props.userUID ? this.props.userUID : this.props.active_user.uid
        axios.get('api/user', {
            params: {
                uid: uid
            }
        })
        .then(response=> {
            console.log('successfully fetch data of user from server here is the data', response.data)
            this.props.userLoad(response.data)
        })
        .catch(err=> {
            console.log('having problem fetching users data from server')
        })
    }

    render() {
      return (
        <div>
        {
            this.props.userInfo ? 
            <div>
                this.props.userInfo is loaded!!!!
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
        userUID: state.userUID
    }
}

function matchDispatchToProps() {
    return bindActionCreators({
        selectUser: selectUser
    })
}

export default connect(mapStateToProps, matchDispatchToProps)(User)