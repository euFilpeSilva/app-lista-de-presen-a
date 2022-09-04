import Card from '../../components/Card';
import React, { useState, useEffect } from 'react';
import './style.css'

export default function Home() {
  const [studentName, setStudantName] = useState('')
  const [students, setStudents] = useState([])
  const [user, setUser] = useState({ name: '', avatar: ''})

  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString('pt-br', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
    };

    setStudents(prevState => [...prevState, newStudent])
  }

  useEffect(() => { 
    async function fetchData() {
     const response = await fetch('https://api.github.com/users/euFilpeSilva')
      const data = await response.json();
        setUser({
          name: data.name,
          avatar: data.avatar_url
        });  
    }
    fetchData();
  },[])

  return (
    <div className="container">
      <header>
        <h1>Lista de presença</h1>
        <div>
            <strong>{user.name}</strong>
            <img src={user.avatar} alt="Foto de perfil"></img>
        </div>
      </header>
      <input type="text"
       placeholder="Digite o nome..."
       onChange={e => setStudantName(e.target.value)}></input>

      <button 
      type="button"
      onClick={handleAddStudent}
      >Adicionar</button>
      {
        students.map(student => 
        <Card
           key={student.time}
           name={student.name} 
           time={students.time} /> ) 
      }
      
      
    </div>
  )
}


