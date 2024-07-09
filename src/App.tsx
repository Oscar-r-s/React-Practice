import Titulo from "./components/Title/Titulo";
import Card, { CardBody } from "./components/Card/Card";
import List from "./components/Lists/List";
import ListaDos from "./components/Lists/ListaDos";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import { useState } from "react";

<Titulo></Titulo>;
function App() {
  const [Data, setData] = useState(["Cyan", "Blue", "Navy", "Purple"]);
  const listados = [1, 4, 6, 8, 9];
  //Ternary operator : in case there´s no content return nothing
  const contenido = Data.length > 0 ? <List data={Data} /> : undefined;
  const colorChosen = document.getElementsByClassName(".inputComponent");
  console.log("This is colorChosen : ", colorChosen);
  const addElement = () => {
    setData([...Data, `Orange`]);
  };
  const deleteElement = () => {
    setData(Data.slice(0, -1));
  };
  return (
    <Card>
      <CardBody title="Hola Mundo" text="Este es el texto" />
      <Input inputType="color"></Input>
      <Button func={addElement} data="Add"></Button>
      <Button func={deleteElement} data="Delete"></Button>
      {contenido}
      <ListaDos data={listados} />
    </Card>
  );
}

export default App;
