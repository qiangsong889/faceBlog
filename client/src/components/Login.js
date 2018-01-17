import React from 'react';
import base from '../firebaseAuth';

class Login extends React.Component {
//   constructor(props) {
//     super(props);
  
//     this.state = {
//       user: null
//     }
//   }

  render() {
      console.log('login render run')
    return (
      <div>
        <div>
            haha
          <h1>FaceBlog</h1>
        </div>
        <div >
          <h2 className="card-header text-center">Login</h2>
          <form className="card-body container">
            <button onClick={base.googleLogin} >Google</button>
            <button onClick={base.githubLogin} >GitHub</button>
            <button onClick={base.logout} > logOut</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Login;