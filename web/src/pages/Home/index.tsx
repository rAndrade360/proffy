import React from 'react';
import './styles.css';
import logo from '../../assets/images/logo.svg'
import landing from '../../assets/images/landing.svg'
import study from '../../assets/images/icons/study.svg'
import giveClasses from '../../assets/images/icons/give-classes.svg'
import purpleHeart from '../../assets/images/icons/purple-heart.svg'

const Home: React.FC = () => {
  return (
    <div id="landing">
        <div id="landing-content" className="container">
            <div id="logo-container">
                <img src={logo}  alt="Logo da aplicação"/>
                <h2>Sua plataforma de estudos online</h2>
            </div>
        <img src={landing} className="hero-image" alt="Imagem ilustrativa"/>
        <div id="button-container">
                <a className="study">
                    <img src={study} alt="Estudar" />
                    Estudar
                </a>
                <a className="give-classes">
                    <img src={giveClasses} alt="Dar aulas" />
                    Dar aulas
                </a>
        </div>
                
        <p id="footer">Total de 200 conexões já realizadas <img src={purpleHeart}  alt="Logo da aplicação"/></p>
        </div>
    </div>
  );
}

export default Home;