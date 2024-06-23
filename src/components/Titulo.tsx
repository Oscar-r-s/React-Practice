function Titulo() {
  const nombre = "Hugo RS";
  //jsx => React.createElement
  if (nombre) {
    return <h1>Hola {nombre}</h1>;
  }
  return <h1>Hola desconocido</h1>;
}

export default Titulo;
