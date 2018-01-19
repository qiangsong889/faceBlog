import React from 'react';
import base from '../firebaseAuth';

class Login extends React.Component {
  render() {
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
          </form>
        </div>
      </div>
    )
  }
}

export default Login;