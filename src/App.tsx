import Titulo from "./Titulo";
import Card, { CardBody } from "./components/Card";
import List from "./components/List";
import ListaDos from "./components/ListaDos";

<Titulo></Titulo>;
function App() {
  const list = ["Marcos", "Julian", "Gustavo", "Maria Dolores", "Carlos Luis"];
  const listados = [1, 4, 6, 8, 9];
  return (
    <Card>
      <CardBody title="Hola Mundo" text="Este es el texto" />
      <List data={list} />
      <ListaDos data={listados} />
    </Card>
  );
}

export default App;
