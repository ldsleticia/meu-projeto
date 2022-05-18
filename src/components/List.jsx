import { Item } from "./Item";

export function List() {
  return (
    <>
      <h1>Minha lista</h1>
      <ul>
        <Item marca="Ferari"/>
        <Item marca="Lamborguini"/>
      </ul>
    </>
  );
}
