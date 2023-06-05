import React from 'react'
import Base from '../Base/Base';
import "../App.css"

import { useNavigate } from 'react-router-dom';
import { Paper } from '@mui/material';

const Students=({students,setStudents})=> {
  const navigate=useNavigate()

  const deletedStudents=(studentsId)=>{
    const removedStudent= students.filter((student)=> 
    student.id !=studentsId)
    setStudents(removedStudent)
  }
  function backToNavigate(studentsId){
navigate(`/Edit Student/${studentsId}`)  
  }
  return (
  
   <Base 
   title={'Student info'}
   description={'All students info will be shown here'}
   >
    

<div className='stud-container'>  
 {students.map((stud,idx)=>(
    <>
    <Paper elevation={16} className='stud-card' key={idx}>
    <h4>{stud.name}</h4>
    <p>Gender: {stud.gender}</p>
    <p>Education: {stud.education}</p>
    <div className='btn-group'>
      <button onClick={()=>navigate(`/Edit Student/${stud.id}`)}>Edit</button>
      <button onClick={()=>deletedStudents(stud.id)}>Delete</button>
    </div>
    </Paper>
    </>
   ))}
  </div>
   </Base>
  )
}






export default Students;