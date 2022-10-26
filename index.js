import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import TodoContainer from './functionBased/components/TodoContainer.jsx';
import About from './functionBased/pages/About.jsx';
import NotMatch from './functionBased/pages/NotMatch.jsx';

//stylesheet
import "./functionBased/components/App.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
     <Route path ="/" element ={<TodoContainer/>}></Route>
     <Route path ="about/*" element ={<About/>}></Route>
     <Route path ="*" element ={<NotMatch/>}></Route>
    </Routes>
    </BrowserRouter>,
  </React.StrictMode>
);


