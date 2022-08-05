import React, { Component } from 'react';
import axios from 'axios'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Parent from './Parent';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Parent from './Parent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      user: {}
    };
  }
  componentDidMount() {
    this.loginStatus()
  }
  loginStatus = () => {
    axios.get('http://localhost:3001/logged_in',
      { withCredentials: true })
      .then(response => {
        if (response.data.logged_in) {
          this.handleLogin(response)
        } else {
          this.handleLogout()
        }
      })
      .catch(error => console.log('api errors:', error))
  }
  handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      user: data.user
    })
  }
  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
      user: {}
    })
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route  path='/' element={<Home/>} />
            <Route  path='/login' element={<Login/> } />
            <Route path='/signup' element={ <Signup/>} />
            <Route path='/posts' element={<Parent/>} />
            
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;