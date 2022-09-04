import Card from '../../components/Card';
import React, { useState } from 'react';
import './style.css'

export default function Home() {
  const [studentName, setStudantName] = useState('')
  const [students, setStudents] = useState([])

  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString('pt-br', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
    };

    setStudents([newStudent])
  }

  return (
    <div className="container">
      <h1>Nome: { studentName }</h1>
      <input type="text"
       placeholder="Digite o nome..."
       onChange={e => setStudantName(e.target.value)}></input>

      <button 
      type="button"
      onClick={handleAddStudent}
      >Adicionar</button>
      {
        students.map(student => <Card name={student.name} time={students.time} /> ) 
      }
      
      
    </div>
  )
}


