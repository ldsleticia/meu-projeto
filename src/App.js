import './App.css';
import HelloWorld from './components/HelloWorld'

function App() {
  const name = 'Letícia'
  const newName = name.toUpperCase()

  function sum(a, b) {
    return a + b
  }

  const url = 'https://via.placeholder.com/150'

  return (
    <div className='App'>
      <h1>Olá {newName}</h1>
      <p>Meu primeiro App</p>
      <p>Soma: {sum(2, 3)}</p>
      <img src={url} alt='minha imagem' />
      <HelloWorld/>
    </div>
  )
}

export default App;
