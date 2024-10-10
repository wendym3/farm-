import React, { useState } from 'react';
import './LoginSignUp.css';

const LoginSignUp = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="login-signup-container">
      <div className="form-container">
        {isLogin ? (
          <>
            <h2>Login</h2>
            <form>
              <input type="text" placeholder="Username" />
              <input type="password" placeholder="Password" />
              <button type="submit">Login</button>
            </form>
            <p>
              Don't have an account? <span onClick={toggleForm}>Sign up here</span>
            </p>
          </>
        ) : (
          <>
            <h2>Sign Up</h2>
            <form>
              <input type="text" placeholder="Username" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button type="submit">Sign Up</button>
            </form>
            <p>
              Already have an account? <span onClick={toggleForm}>Login here</span>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginSignUp;
