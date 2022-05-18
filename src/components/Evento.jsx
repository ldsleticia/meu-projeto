export function Evento({numero}) {
  function meuEvento() {
      console.log(`clicou aqui meu patrão ${numero}`)
  }
  return (
    <>
      <p>Clique para disparar um evento</p>
      <button onClick={meuEvento}>Ativar!</button>
    </>
  );
}
