import React from 'react';
import './style.css';
import PageHeader from '../../components/PageHeader';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import Input from '../../components/Input';
import Select from '../../components/Select';
import subjects from '../../utils/materias.json';
import diasDaSemana from '../../utils/diasDaSemana.json';


function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
          <PageHeader title="Esses são os proffys disponíveis">
            <form id="search-teacher">
              <Select label="Matéria" name="subject" options={subjects} />
              <Select label="Dia da semana" name="week_day" options={diasDaSemana} />
              <Input label="Horário" name="time" type="time" />
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