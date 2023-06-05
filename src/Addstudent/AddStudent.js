import React, { useState } from 'react'
import Base from '../Base/Base'
import { useNavigate } from 'react-router-dom'

function AddStudent({students,setStudents}) {

    const [id,setId]=useState("")
    const [name,setname]=useState("")
    const [gender,setGender]=useState("")
    const [education,setEducation]=useState("")
    const navigate= useNavigate()

    const handleClick=()=>{
        const newstudent={
            id,
            name,
            gender,
            education
        }
        console.log(newstudent)
        setStudents([...students,newstudent])
        navigate('/Students')
        
    }
  return (
    <Base
    title={"Kindly update the form to Add the Student data"}>
    <div className='addinputbox'>
<input placeholder='Id of the student' type='number' value={id} onChange={(e)=>setId(e.target.value)}/>
<input placeholder='Name of the student' type='text' value={name} onChange={(e)=>setname(e.target.value)}/>
<input placeholder='Gender of the student' type='text' value={gender} onChange={(e)=>setGender(e.target.value)}/>
<input placeholder='Education of the student' type='text' value={education} onChange={(e)=>setEducation(e.target.value)}/>
<button onClick={()=>handleClick()}> Add Students</button> 
    </div>
    </Base>
  )
}

export default AddStudent