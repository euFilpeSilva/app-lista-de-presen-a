import './style.css'
import Card from '../../components/Card';

export default function Home() {

  return (
    <div className="container">
      <h1>Lista de presença</h1>
      <input type="text" placeholder="Digite o nome..."></input>
      <button type="button">Adicionar</button>
      <Card/>
    </div>
  )
}


