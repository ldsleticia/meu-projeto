import './App.css';
// import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import { List } from './components/List';

function App() {
  const name = 'Maria'
  const newName = name.toUpperCase()

  function sum(a, b) {
    return a + b
  }

  const url = 'https://via.placeholder.com/150'

  return (
    <div className='App'>
      <Frase/>
      <Frase/>
      <SayMyName name='Letícia' />
      <SayMyName name='Matheus' />
      <SayMyName name='Elijah' />
      <Pessoa name='Letícia' idade='26' profissao='Programadora' foto={url} />
      <List/>
    </div>
  )
}

export default App;
