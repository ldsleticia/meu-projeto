import { Item } from "./Item";

export function List() {
  return (
    <>
      <h1>Minha lista</h1>
      <ul>
        <Item marca="Ferari" ano_lancamento={1985} />
        <Item marca="Lamborguini" ano_lancamento={1964} />
        <Item />
      </ul>
    </>
  );
}
