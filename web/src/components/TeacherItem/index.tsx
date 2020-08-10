import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './style.css';
import api from '../../services/api';
import TeacherItemProps from '../../interfaces/TeacherItemProps';
// import { Container } from './styles';


const TeacherItem: React.FC<TeacherItemProps> = ({teacher}) => {
  async function createConnection(){
      await api.post("/connections", {user_id: teacher.id})
  }
    return (
    <article className="teacher-item">
    <header>
        <img src={teacher.avatar} alt="Renan de Andrade"/>
        <div>
            <strong>{teacher.name}</strong>
            <span>{teacher.subject}</span>
        </div>
    </header>
    <p>
        {teacher.bio}
    </p>
    <footer>
        <p>Preço/Hora
            <strong>R$ {teacher.cost}</strong>
        </p>
        <a onClick={()=> createConnection()} target="_blank" href={`https://wa.me/${teacher.whatsapp}?text=sua%20mensagem`}>
            <img src={whatsappIcon} alt="Ícone do whatsapp"/>
            Entrar em contato
        </a>
    </footer>
</article>
  )
}

export default TeacherItem;