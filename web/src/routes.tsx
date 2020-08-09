import React from 'react';
import Home from './pages/Home';
import {BrowserRouter, Route} from 'react-router-dom';
import TeacherList from './pages/TeatcherList';
import TeatcherForm from './pages/TeatcherForm';

// import { Container } from './styles';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/study" component={TeacherList} />
      <Route path="/give-classes" component={TeatcherForm} />
    </BrowserRouter>  
  ) ;
}

export default Routes;