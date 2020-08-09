import React from 'react';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import warningIcon from '../../assets/images/icons/warning.svg';
import './style.css';
import TextArea from '../../components/TextArea';
import Select from '../../components/Select';
import subjects from '../../utils/materias.json';
import diasDaSemana from '../../utils/diasDaSemana.json';

const TeatcherForm: React.FC = () => {
  return (
    <div id="page-teacher-form" className="container">
        <PageHeader 
          discription="O primeiro passo é preencher esse formulário de inscrição" 
          title="Que bom que você quer dar aulas!"
        />
        <main>
            <form action="">
                <fieldset>
                    <legend>Seus dados</legend>
                    <Input label="Nome" name="name" />
                    <Input label="Avatar" name="avatar" />
                    <Input label="Whatsapp" name="whatsapp" />
                    <TextArea label="Biografia" name="bio" />
                </fieldset>
                <fieldset>
                    <legend>Sobre a aula</legend>
                    <Select label="Matéria" name="subject" options={subjects} />
                    <Input label="Custo da hora por aula" name="cost" />
                </fieldset>
                <fieldset>
                    <legend>
                        Horários disponíveis
                        <button type="button">+ Novo horário</button>
                    </legend>
                    <Select label="Dia da semana" name="week_day" options={diasDaSemana} />
                    <Input label="Das" type="time" name="from" />
                    <Input label="Às" type="time" name="to" />
                    
                </fieldset>
                <footer>
                  <div id="warning">
                    <img src={warningIcon} alt="Important"/>
                    <p>Importante!<br />
                      Preencha todos os dados
                    </p>
                  </div>
                  <button type="submit">
                      Salvar cadastro
                  </button>
                </footer>
            </form>
        </main>
    </div>
    );
}

export default TeatcherForm;