type Props = {
  data: number[];
};

function ListaDos({ data }: Props) {
  const handleClick = (numero: number) => {
    console.log(numero);
  };
  return (
    <ul className="number-list-group">
      {data.map((element) => (
        <li
          onClick={() => handleClick(element)}
          key={element}
          className="number-list-group-item"
        >
          {element}
        </li>
      ))}
    </ul>
  );
}

export default ListaDos;
