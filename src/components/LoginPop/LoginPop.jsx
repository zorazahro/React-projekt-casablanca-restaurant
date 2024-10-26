import { assets } from '../../assets/assets';
import './LoginPop.css';
import { useState } from 'react';

const LoginPop = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState('Anmelden');

  return (
    <div className='login-popup'>
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
          {/* Afficher le champ Nom uniquement si currState est 'Einloggen' */}
          {currState === 'Einloggen' && <input type="text" placeholder='Name' required />}
          
          <input type="email" placeholder='Email Adresse' required />
          <input type="password" placeholder='Passwort' required />
          <button>{currState === 'Einloggen' ? 'Konto erstellen' : 'Anmelden'}</button>
          <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>Durch Fortfahren stimme ich den Nutzungsbedingungen und der Datenschutzrichtlinie zu.</p>
          </div>
          {currState === 'Anmelden' 
            ? <p>Ein neues Konto erstellen? <span onClick={() => setCurrState('Einloggen')}>Klicken Sie hier</span></p>
            : <p>Haben Sie bereits ein Konto? <span onClick={() => setCurrState('Anmelden')}>Hier einloggen</span></p>}
        </div>
      </form>
    </div>
  );
}

export default LoginPop;

