import React, {useState, SyntheticEvent, FormEvent} from 'react';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import warningIcon from '../../assets/images/icons/warning.svg';
import './style.css';
import TextArea from '../../components/TextArea';
import Select from '../../components/Select';
import subjects from '../../utils/materias.json';
import diasDaSemana from '../../utils/diasDaSemana.json';
import api from '../../services/api';

const TeatcherForm: React.FC = () => {
  const [teacherForm, setTeacherForm] = useState({
    name:"",
    avatar:"",
    whatsapp:"",
    bio:"",
    subject:"",
    cost:""
  })
  const [scheduleForm, setScheduleForm] = useState([{
    week_day:"",
    from:"",
    to:"",
  }]);
  function addNewTime(){
    setScheduleForm([...scheduleForm, { 
    week_day:"",
    from:"",
    to:"",}])
  }
  function onChangeTeacherForm(event: SyntheticEvent<EventTarget>){
    let eventTarget = event.target as HTMLInputElement;
    setTeacherForm({...teacherForm, [eventTarget.name]: eventTarget.value})
  }
  function onChangeScheduleForm(event: SyntheticEvent<EventTarget>, index: number){
    let eventTarget = event.target as HTMLInputElement;
    const updatedSchedule = scheduleForm.map((value, key)=>{
      if(key === index){
        return {...value, [eventTarget.name]: eventTarget.value}
      }
      return value
    })
    setScheduleForm(updatedSchedule)
  }
  async function handleFormSubmit(event: FormEvent){
    event.preventDefault();
    const teacherForSubmit = {...teacherForm, schedule: scheduleForm};
    try {
      await api.post('/classes', teacherForSubmit)
    } catch (error) {
      alert("Oh sheet!");
    }
    alert("Wow! It's works!");
  }
  return (
    <div id="page-teacher-form" className="container">
        <PageHeader 
          discription="O primeiro passo é preencher esse formulário de inscrição" 
          title="Que bom que você quer dar aulas!"
        />
        <main>
            <form action="" onSubmit={handleFormSubmit}>
                <fieldset>
                    <legend>Seus dados</legend>
                    <Input label="Nome" value={teacherForm.name} onChange={onChangeTeacherForm} name="name" />
                    <Input label="Avatar" value={teacherForm.avatar} onChange={onChangeTeacherForm} name="avatar" />
                    <Input label="Whatsapp" value={teacherForm.whatsapp} onChange={onChangeTeacherForm} name="whatsapp" />
                    <TextArea label="Biografia" value={teacherForm.bio} onChange={onChangeTeacherForm} name="bio" />
                </fieldset>
                <fieldset>
                    <legend>Sobre a aula</legend>
                    <Select label="Matéria" value={teacherForm.subject} onChange={onChangeTeacherForm} name="subject" options={subjects} />
                    <Input label="Custo da hora por aula" value={teacherForm.cost} onChange={onChangeTeacherForm} name="cost" />
                </fieldset>
                <fieldset>
                    <legend>
                        Horários disponíveis
                        <button onClick={()=>addNewTime()} type="button">+ Novo horário</button>
                    </legend>
                    
                      {
                        scheduleForm.map((schedule, index)=> (
                          <div>
                            <Select label="Dia da semana" onChange={(event) => onChangeScheduleForm(event, index)} name="week_day" value={schedule.week_day} options={diasDaSemana} />
                            <Input label="Das" type="time" onChange={(event) => onChangeScheduleForm(event, index)} value={schedule.from} name="from" />
                            <Input label="Às" type="time" onChange={(event) => onChangeScheduleForm(event, index)} value={schedule.to} name="to" />
                          </div>
                        ))
                      }
                      
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