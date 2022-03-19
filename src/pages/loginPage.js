import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { UsersServices } from '../services/UsersService';
import { BrowserRouter, Navigate } from 'react-router-dom';

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoginError, setIsLoginError] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
  
    const submit = ()=>{
        
        new UsersServices().login(email,password).then(()=>{
            setIsLoggedIn(true);
            localStorage.setItem('user',email);
        }).catch(e=>{
            setIsLoginError(true);
        })
    }
    return (
      <div className="App">
            {
                isLoggedIn && <Navigate to={'/'} />
            }
            <div className="Login">
            <h3>Sign In</h3>
                  <div className="form-group">
                      <label>Email address</label>
                      <input type="email" className="form-control" placeholder="Enter email"  onChange={e => setEmail(e.target.value)} />
                  </div>
                  <div className="form-group">
                      <label>Password</label>
                      <input type="password" className="form-control" placeholder="Enter password" onChange={e => setPassword(e.target.value)}  />
                  </div>
                  <div className="form-group">
                      <div className="custom-control custom-checkbox">
                          <input type="checkbox" className="custom-control-input" id="customCheck1" />
                          <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                      </div>
                  </div>
                  <button onClick={submit} className="btn btn-primary btn-block">Submit</button>
                  <p className="forgot-password text-right">
                      Forgot <a href="#">password?</a>
                  </p>
                  {
                      isLoginError && <p style={{color:'red'}}>login error</p>
                  }
      </div>
      </div>
    );
    }