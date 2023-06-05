import React, { useState, useEffect } from 'react'
import Base from '../Base/Base'
import { useNavigate, useParams } from 'react-router-dom'
 
function EditStudent({students, setStudents}) {
  
    const{id}=useParams()
    const [idx,setIdx]=useState("")
    const [name,setname]=useState("")
    const [gender,setGender]=useState("")
    const [education,setEducation]=useState("")
    const navigate=useNavigate() 
    
  useEffect(()=>{
const studentData=students.find(stud => stud.id === id);
    if(studentData){   
   setIdx(studentData.id)
   setname(studentData.name)
   setGender(studentData.gender)
   setEducation(studentData.education)
    }
},[id, students])

const updatedStudent=()=>{
  
  const studindex=students.findIndex((stud) => stud.id ===id)
console.log(studindex)

const updatedStudent={
  id,
  name,
  gender,
  education
}
students[studindex] =updatedStudent
setStudents([...students])
navigate('/Students')
       
}

  return (
    <Base 
    title={'Kindly update the form to make the changes Student data'}>
    <div className='addinputbox'>
<input placeholder='Id of the student' type='number' value={idx} onChange={(e)=>setIdx(e.target.value)}/>
<input placeholder='Name of the student' type='text' value={name} onChange={(e)=>setname(e.target.value)}/>
<input placeholder='Gender of the student' type='text' value={gender} onChange={(e)=>setGender(e.target.value)}/>
<input placeholder='Education of the student' type='text' value={education} onChange={(e)=>setEducation(e.target.value)}/>
<button onClick={updatedStudent}> Edit Students</button> 
    </div>
    </Base>
  )
}
     


export default EditStudent