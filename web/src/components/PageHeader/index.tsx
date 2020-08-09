import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';
import goBackArrow from '../../assets/images/icons/back.svg';
import logo from '../../assets/images/logo.svg';

interface PageHeaderProps {
    title: string;
    discription?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({title, discription, children}) => {
  return (
    <header className="page-header">
              <div className="top-bar-container">
                <Link to="/">
                  <img src={goBackArrow} alt="Voltar" />
                </Link>
                <Link to="/">
                <img src={logo} alt="Logo da aplicação" />  
                </Link>
              </div>

              <div className="top-bar-content">
                <strong>{title}</strong>
                {discription && <p>{discription}</p>}
                {children}
              </div>
              
          </header>
);
}

export default PageHeader;