import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'


class Bio extends React.Component {
    constructor(props) {
       super(props) 
       this.state = {
          toggle:false
       }
    }
    componentWillMount() {
    }
    toggleBio() {
        this.setState({
            toggle: !this.state.toggle
        })
        if(this.state.toggle){
            const bioButton = document.getElementsByClassName('bioInfo')
            const bio = {
                userId: this.props.userId,
                displayName: bioButton[0].value,
                bio: bioButton[1].value,
                location: bioButton[2].value,
                school: bioButton[3].value
            }
            console.log('toggleBio run')
            axios.post('api/bio', bio)
                 .then(res=> {
                    console.log('here is the response', res)
                    this.props.update();

                 })
                 .catch(err=> {
                     console.log('Error doing axios post api/bio', err)
                 })
        }
    }
    render() {
      return(
          <div>
              displayName: {this.props.userLoad.displayName}
                  {
                      this.state.toggle?
                      <div>
                          <input className="bioInfo" defaultValue={this.props.userLoad.displayName}/>
                      </div>
                      :
                      <div>
                      </div>
                  }
              bio: {this.props.userLoad.bio}
              {
                      this.state.toggle?
                      <div>
                          <input className="bioInfo" defaultValue={this.props.userLoad.bio}/>
                      </div>
                      :
                      <div>
                      </div>
                  }
              location: {this.props.userLoad.location}
              {
                      this.state.toggle?
                      <div>
                          <input className="bioInfo" defaultValue={this.props.userLoad.location}/>
                      </div>
                      :
                      <div>
                      </div>
                  }
              school: {this.props.userLoad.school}
              {
                      this.state.toggle?
                      <div>
                          <input className="bioInfo" defaultValue={this.props.userLoad.school}/>
                      </div>
                      :
                      <div>
                      </div>
                  }
              <button onClick={this.toggleBio.bind(this)}>edit bio</button>
          </div>
      )
    }
}

function mapStateToProps(state){
    return{
        userLoad: state.userLoad,
        active_user: state.active_user,
        userId: state.userId

    }
}

export default connect(mapStateToProps)(Bio)