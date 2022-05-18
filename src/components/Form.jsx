export function Form() {
  function cadastrarUsuario(e) {
      e.preventDefault()
    console.log("me cadastrou aqui pai");
  }
  return (
    <>
      <h1>Meu cadastro</h1>
      <form onSubmit={cadastrarUsuario}>
        <div>
          <input type="text" placeholder="digite seu nome" />
        </div>
        <div>
          <input type="submit" value="cadastrar" />
        </div>
      </form>
    </>
  );
}
