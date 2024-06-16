import Titulo from "./Titulo";
import Card, { CardBody } from "./components/Card";
<Titulo></Titulo>;
function App() {
  return (
    <Card>
      <CardBody title="Hola Mundo" text="Este es el texto" />
    </Card>
  );
}

export default App;
