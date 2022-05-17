import './App.css';

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
      <img src={url} alt='minha imagem'/>
    </div>
  )
}

export default App;
