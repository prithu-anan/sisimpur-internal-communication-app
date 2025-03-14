import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import ReactCardFlip from 'react-card-flip';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import '../Stylesheets/LoginPage.css';
import traqLogo from '../assets/traq-logo.svg';
import traqLogoText from '../assets/traq-logo-text.svg';
import { login, signup } from '../api-helpers';
import Cookies from 'js-cookie';

const LoginPage = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [loginInfo, setLoginInfo] = useState({ traqId: '', password: '' });
  const [registrationInfo, setRegistrationInfo] = useState({ traqId: '', password: '', confirmPassword: '' });
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    setPasswordError('');
  };

	const handleLoginSubmit = async (e) => {
		e.preventDefault();
	
		const { success, message } = await login(loginInfo.traqId, loginInfo.password);
	
		if (success) {
			navigate('/channels');
		} else {
			alert(message);
		}
	};

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    if (registrationInfo.password !== registrationInfo.confirmPassword) {
      setPasswordError('Passwords do not match');
    } else {
      setPasswordError('');
      const { success, message } = await signup(registrationInfo.traqId, registrationInfo.password);
	
			if (success) {
				alert('Signup successful!');
				navigate('/dashboard');
			} else {
				alert(message);
			}
    }
  };

  return (
    <section className="card-section">
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        {/* Login Form */}
        <div className="login-div">
          <div className="traq-logo">
            <div className="logo-img">
              <img src={traqLogo} alt="TRAQ Logo" />
            </div>
            <div className="logo-text">
              <img src={traqLogoText} alt="TRAQ Text" />
            </div>
          </div>
          <form className="login-form" onSubmit={handleLoginSubmit}>
            <label className="form-label">
              <p className="traq-id">traQ ID</p>
              <input
                type="text"
                value={loginInfo.traqId}
                onChange={(e) => setLoginInfo({ ...loginInfo, traqId: e.target.value })}
                required
                className="input-field"
                placeholder="Enter your traQ ID"
              />
            </label>

            <label className="form-label password-container">
              <p className="traq-id">Password</p>
              <div className="password-wrapper">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={loginInfo.password}
                  onChange={(e) => setLoginInfo({ ...loginInfo, password: e.target.value })}
                  required
                  className="input-field"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  className="show-password-button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </button>
              </div>
            </label>

            <button type="submit" className="login-button">
              Login
            </button>
          </form>

          <hr className="horizontal-rule-login"></hr>

          <p className="flip-card-login">
            Don't have an account?{' '}
            <button onClick={handleFlip} className="flip-button-login">
              Sign Up
            </button>
          </p>
        </div>

        {/* Sign Up Form */}
        <div className="login-div">
          <div className="traq-logo">
            <div className="logo-img">
              <img src={traqLogo} alt="TRAQ Logo" />
            </div>
            <div className="logo-text">
              <img src={traqLogoText} alt="TRAQ Text" />
            </div>
          </div>
          <form className="signup-form" onSubmit={handleSignupSubmit}>
            <label className="form-label">
              <p className="traq-id">traQ ID</p>
              <input
                type="text"
                value={registrationInfo.traqId}
                onChange={(e) => setRegistrationInfo({ ...registrationInfo, traqId: e.target.value })}
                required
                className="input-field"
                placeholder="Enter your traQ ID"
              />
            </label>

            <label className="form-label password-container">
              <p className="traq-id">Password</p>
              <div className="password-wrapper">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={registrationInfo.password}
                  onChange={(e) => setRegistrationInfo({ ...registrationInfo, password: e.target.value })}
                  required
                  className="input-field"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  className="show-password-button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </button>
              </div>
            </label>

            <label className="form-label password-container">
              <p className="traq-id">Confirm Password</p>
              <div className="password-wrapper">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={registrationInfo.confirmPassword}
                  onChange={(e) => setRegistrationInfo({ ...registrationInfo, confirmPassword: e.target.value })}
                  required
                  className="input-field"
                  placeholder="Re-enter your password"
                />
                <button
                  type="button"
                  className="show-password-button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </button>
              </div>
            </label>

						<div className="error-container">
							{passwordError && <p className="error-message">{passwordError}</p>}
						</div>
            
            <button type="submit" className="signup-button">
              Sign up
            </button>
          </form>

          <hr className="horizontal-rule-signup"></hr>

          <p className="flip-card-signup">
            Switch to{' '}
            <button onClick={handleFlip} className="flip-button-signup">
              Login
            </button>
          </p>
        </div>
      </ReactCardFlip>
    </section>
  );
};

export default LoginPage;
