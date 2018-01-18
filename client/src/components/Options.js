// import React from 'react'
// import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'



// class Options extends React.Component {

//     render() {
//         console.log('so we know which one it is', this.props.option);
//         return (
//                  <div>
//                      inside of Options
//                  </div>        
//                )
//     }
import React from 'react'
import { connect } from 'react-redux'
import User from './User'

class Options extends React.Component {

    render(){
        if(this.props.option === 'user') {
            return(
                <User />
            )
        }

    }
}
function mapStateToProps(state) {
    return {
        option: state.option
    }
}

export default connect(mapStateToProps)(Options)