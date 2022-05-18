import './App.css';
// import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {
  const name = 'Maria'
  const newName = name.toUpperCase()

  function sum(a, b) {
    return a + b
  }

  const url = 'https://via.placeholder.com/150'

  return (
    <div className='App'>
      <SayMyName nome='Letícia' />
      <SayMyName nome='Matheus' />
      <SayMyName nome='Elijah' />
      <Pessoa nome='Letícia' idade='26' profissao='Programadora' foto={url} />
    </div>
  )
}

export default App;
