import  { useState } from 'react';
import Login from './Login';
import Register from './Register';
import '../../css/CssForLogin.css';

const Guest = () => {
  const [login, setLogin] = useState(true);

  const handleToggle = () => {
    setLogin(prevState => !prevState);
  };

  return (
    <div className="containerSwitch">
      {login ? <Login /> : <Register />}
      <button className="switchButton" onClick={handleToggle}>
        <span className="button__text">
          {login ? 'Switch to Register' : 'Switch to Login'}
        </span>
        <i className="button__icon fas fa-chevron-right"></i>
      </button>
    </div>
  );
};

export default Guest;
