import { useState } from "react";

export function Form() {
  function cadastrarUsuario(e) {
    e.preventDefault();
    console.log(name)
    console.log(password)
    console.log("me cadastrou aqui pai");
  }

  const [name, setName] = useState()
  const [password, setPassword] = useState()

  return (
    <>
      <h1>Meu cadastro</h1>
      <form onSubmit={cadastrarUsuario}>
        <div>
          <label htmlFor="name">
            Nome:
            <input 
              type="text" 
              id="name" 
              placeholder="digite seu nome"
              onChange={(e) => setName(e.target.value)}/>
          </label>
        </div>

        <div>
          <label htmlFor="password">
            Senha:
            <input
              type="password"
              id="password"
              placeholder="digite sua senha"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>

        <div>
          <label htmlFor="submit">
            <input type="submit" id="submit" value="cadastrar" />
          </label>
        </div>
      </form>
    </>
  );
}
