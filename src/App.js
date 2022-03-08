import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './all';


// const rightActive = () => {

//   container.classList.add('right-panel-active');
// };
function App() {
  const [_class, setClass] = useState('container');

  const rightPanel = () => {

    if (_class === 'container') {
      setClass('container right-panel-active');
    } else {
      setClass('container');

    }
  };

  return (
    <div className="App">
      <section className={_class} id="container">
        <div className="form-container sign-up-container">
          <form action="#">
            <h1>Create Account</h1>
            <div className="social-container">
              <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
              <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
            </div>
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" required />
            <input type="text" placeholder="Email" required />
            <input type="text" placeholder="Password" required />
            <button>Sign up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="#">
            <h1>Sign in</h1>
            <div className="social-container">
              <a href="" className="social"><i className="fab fa-facebook-f"></i></a>
              <a href="" className="social"><i className="fab fa-google-plus-g"></i></a>
              <a href="" className="social"><i className="fab fa-linkedin-in"></i></a>
            </div>
            <span>or use your account</span>
            <input type="email" placeholder="Email" required />

            <input type="password" placeholder="Password" required />
            <a href="#">Forgot password?</a>
            <button>Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>To keep connected with us please log in with your personal info</p>
              <button className="ghost" onClick={rightPanel} id="signIn">Sign In</button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className="ghost" onClick={rightPanel} id="signUp">Sign Up</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
