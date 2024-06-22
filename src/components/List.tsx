type Props = {
  data: string[];
};

function List({ data }: Props) {
  const handleClick = (element: string) => {
    console.log(element);
  };

  return (
    <ul className="list-group">
      {data.map((element) => (
        <li
          onClick={() => handleClick(element)}
          key={element}
          className="list-group-item"
        >
          {element}
        </li>
      ))}
    </ul>
  );
}

export default List;
