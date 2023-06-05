
import { useState } from 'react';
import './App.css';
import Base from './Base/Base';
import Students from './Component/Students';
import { Data } from './Data/Data';
import { Routes,Route } from 'react-router-dom';
import Dashboard from './Component/Dashboard'
import AddStudent from './Addstudent/AddStudent';
import EditStudent from './Editstudent/EditStudent';


function App() {
  const [students,setStudents]=useState(Data)
  
  return (
    <div className="App">
<Routes>
  <Route exact path='/' element={<Dashboard/>}/>

  <Route path='/students' element={<Students 
  students={students}
  setStudents={setStudents}
  /> }/>

  <Route path='/Add Student' element={<AddStudent
    students={students}
    setStudents={setStudents}
    />}/>

    <Route path='/Edit Student/:id' element={<EditStudent
   
    students={students}
    setStudents={setStudents}
    />
}/>
<Route path='*' element={<h1>Lost Your Way?</h1>}/>
</Routes>
 
 
    </div>
  );
}

export default App;
