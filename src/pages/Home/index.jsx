import Card from '../../components/Card';
import React, { useState } from 'react';
import './style.css'

export default function Home() {
  const [studantName, setStudantName] = useState('')


  return (
    <div className="container">
      <h1>Nome: { studantName }</h1>
      <input type="text"
       placeholder="Digite o nome..."
       onChange={e => setStudantName(e.target.value)}></input>

      <button type="button">Adicionar</button>
      <Card name="Filipe" time=" 11:30:05" />
      <Card name="Rodrigo" time=" 10:20:35" />
      
    </div>
  )
}


