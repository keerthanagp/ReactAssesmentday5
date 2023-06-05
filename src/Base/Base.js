 import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
 
 
 function Base({title,description,children}) {
    const navigate=useNavigate()
    
   return (
     <div className="mainContainer">
        <header>
            <nav>
            <AppBar position="static">
         <Toolbar variant="dense">
      <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
    </IconButton>
    <Typography variant="h6" color="inherit" component="div">
      CRUD OPERATOR
    </Typography>
    <Typography variant="h6" color="inherit" onClick={()=>navigate('/')} component="div">
      Dashboard
    </Typography>
    <Typography variant="h6" onClick={()=>navigate('/Students')} color="inherit" component="div">
    Students
    </Typography>
    <Typography variant="h6" onClick={()=>navigate('/Add Student')} color="inherit" component="div">
    Add Student
    </Typography>
  </Toolbar>
</AppBar>
            </nav>
        </header>
        <main>
            <h1>{title}</h1>
            <h3>{description}</h3>
            <div className='container'>
                {children}
            </div>
        </main>
     </div>
   )
 }
 
 export default Base;