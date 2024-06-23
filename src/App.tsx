import Titulo from "./components/Titulo";
import Card, { CardBody } from "./components/Card";
import List from "./components/List";
import ListaDos from "./components/ListaDos";

<Titulo></Titulo>;
function App() {
  const list = [
    "Red",
    "Blue",
    "#133337 ",
    "Green",
    "Purple",
    "Yellow",
    "#98a772",
  ];
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
