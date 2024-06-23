import { useState } from "react";

type Props = {
  data: string[];
};

function List({ data }: Props) {
  // Initialize state to keep track of the background color for each item
  const [backgroundColors, setBackgroundColors] = useState<string[]>(
    new Array(data.length).fill("transparent")
  );

  const handleClick = (index: number, name: string) => {
    const newColors = [...backgroundColors];
    newColors[index] = newColors[index] === "cyan" ? "transparent" : "cyan";
    setBackgroundColors(newColors);
    console.log(name);
  };

  return (
    <ul className="list-group">
      {data.map((element, index) => (
        <li
          onClick={() => handleClick(index, element)}
          key={element}
          className="list-group-item"
          style={{ backgroundColor: backgroundColors[index] }}
        >
          {element}
        </li>
      ))}
    </ul>
  );
}

export default List;
