import React from 'react';
import './style.css';
import PageHeader from '../../components/PageHeader';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'


function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
          <PageHeader title="Esses são os proffys disponíveis">
            <form id="search-teacher">
              <div className="input-block">
                <label htmlFor="subject">Matéria</label>
                <input type="text" name="subject" id="subject"/>
              </div>
              <div className="input-block">
                <label htmlFor="week_day">Dia da semana</label>
                <input type="text" name="week_day" id="week_day"/>
              </div>
              <div className="input-block">
                <label htmlFor="time">Horário</label>
                <input type="text" name="time" id="time"/>
              </div>
            </form>
          </PageHeader>
          <main>
            <article className="teacher-item">
                <header>
                    <img src="https://avatars1.githubusercontent.com/u/52615988?s=460&u=c75a66714ab73cd5923405985e693e36994d2ade&v=4" alt="Renan de Andrade"/>
                    <div>
                        <strong>Renan de Andrade</strong>
                        <span>Matemática</span>
                    </div>
                </header>
                <p>
                    Entusiasta das melhores tecnologias em Matemática
                    <br/>
                    <br/>
                    Apaixonado por aprender e ensinar matemática, e mudar a vida das pessoas com isso.
                </p>
                <footer>
                    <p>Preço/Hora
                        <strong>R$ 80,00</strong>
                    </p>
                    <button>
                        <img src={whatsappIcon} alt="Ícone do whatsapp"/>
                        Entrar em contato
                    </button>
                </footer>
            </article>
          </main>
        </div>
    );
}

export default TeacherList;