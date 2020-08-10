import React, {useEffect, useState, SyntheticEvent, FormEvent} from 'react';
import './style.css';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Select from '../../components/Select';
import subjects from '../../utils/materias.json';
import diasDaSemana from '../../utils/diasDaSemana.json';
import api from '../../services/api';
import TeacherItem from '../../components/TeacherItem';


function TeacherList() {
    const [form, setForm] = useState({
        subject: "",
        week_day: "",
        time: ""
    });
    const [teacherList, setTeacherList] = useState([]);
    function onChangeForm(event: SyntheticEvent<EventTarget>){
        let eventTarget = event.target as HTMLInputElement;
        setForm({...form, [eventTarget.name]: eventTarget.value})
    }
    async function getClassesApi(event: FormEvent){
        event.preventDefault();
        const teachersResult = await api.get('/classes', {params: form});
        console.log(teachersResult);
        setTeacherList(teachersResult.data);
    }
    return (
        <div id="page-teacher-list" className="container">
          <PageHeader title="Esses são os proffys disponíveis">
            <form id="search-teacher">
              <Select label="Matéria" value={form.subject} onChange={onChangeForm} name="subject" options={subjects} />
              <Select label="Dia da semana" value={form.week_day} onChange={onChangeForm} name="week_day" options={diasDaSemana} />
              <Input label="Horário" value={form.time} onChange={onChangeForm} name="time" type="time" />
              <button name="search" onClick={getClassesApi} id="search" type="submit">Buscar</button>
            </form>
          </PageHeader>
          <main>
              {teacherList.map((teacher, index) => (
                  <TeacherItem key={index} teacher={teacher}  />
              ))}
          </main>
        </div>
    );
}

export default TeacherList;