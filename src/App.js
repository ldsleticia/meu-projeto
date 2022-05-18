import './App.css';
// import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import { List } from './components/List';
import { Evento } from './components/Evento';
import { Form } from './components/Form';

function App() {
  const name = 'Maria'
  const newName = name.toUpperCase()

  function sum(a, b) {
    return a + b
  }

  const url = 'https://via.placeholder.com/150'

  return (
    <div className='App'>
      <h1>Testando evento</h1>
      <Evento numero='1'/>
      <Form/>
    </div>
  )
}

export default App;
