import React, { useEffect, useState}  from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import logo from '../../assets/images/logo.svg';
import landing from '../../assets/images/landing.svg';
import study from '../../assets/images/icons/study.svg';
import giveClasses from '../../assets/images/icons/give-classes.svg';
import purpleHeart from '../../assets/images/icons/purple-heart.svg';
import api from '../../services/api';

function Home () {
    const [totalConections, setTotalConnections] = useState(0);
    useEffect(()=> {
        async function loadTotalConnections(){
            const totalConnectionsResponse = await api.get('/connections');
            console.log(totalConnectionsResponse);
            setTotalConnections(totalConnectionsResponse.data.totalResult.total);
        }
        loadTotalConnections();
    }, [])
  return (
    <div id="landing">
        <div id="landing-content" className="container">
            <div id="logo-container">
                <img src={logo}  alt="Logo da aplicação"/>
                <h2>Sua plataforma de estudos online</h2>
            </div>
        <img src={landing} className="hero-image" alt="Imagem ilustrativa"/>
        <div id="button-container">
                <Link to="/study" className="study">
                    <img src={study} alt="Estudar" />
                    Estudar
                </Link>
                <Link to="/give-classes" className="give-classes">
                    <img src={giveClasses} alt="Dar aulas" />
                    Dar aulas
                </Link>
        </div>
                
        <p id="footer">Total de {totalConections} conexões já realizadas <img src={purpleHeart}  alt="Logo da aplicação"/></p>
        </div>
    </div>
  );
}

export default Home;