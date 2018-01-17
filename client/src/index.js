import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/app.jsx'
import Login from './components/login'
import store from "./store"



class Root extends React.Component {
    render() {
      return (
        <BrowserRouter>
          <div>
            <Route exactly pattern="/" component={App} />
          </div>
        </BrowserRouter>
      )
    }
  }
    
  
  render(
    <Provider store={ store }>
    <Root />
    </Provider>
    , document.getElementById('app')
  );