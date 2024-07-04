import Titulo from "./components/Titulo";
import Card, { CardBody } from "./components/Card";
import List from "./components/List";
import ListaDos from "./components/ListaDos";
import Button from "./Button";

<Titulo></Titulo>;
function App() {
  const list: string[] = ["Red", "#228092", "Cyan", "Maroon"];
  const buttonName: string = "Button";
  const listados = [1, 4, 6, 8, 9];
  //Ternary operator : in case there´s no content return nothing
  const contenido = list.length ? <List data={list} /> : undefined;
  return (
    <Card>
      <CardBody title="Hola Mundo" text="Este es el texto" />
      {contenido}
      <Button data={buttonName}></Button>
      <ListaDos data={listados} />
    </Card>
  );
}

export default App;
