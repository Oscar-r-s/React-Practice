import { useState } from "react";

type Props = {
  data: string[];
};

function modifyData(data: string[]): string[] {
  return data.map((color) =>
    color.startsWith("#") ? `Custom Hexagesimal ${color}` : color
  );
}

function List({ data }: Props) {
  // Initialize state to keep track of the background color for each item
  const [backgroundColors, setBackgroundColors] = useState<string[]>(
    new Array(data.length).fill("transparent")
  );
  //In case it is a Custom color
  const modifiedData = modifyData(data);
  //Changes background on click
  const handleClick = (index: number, name: string) => {
    const newColors = [...backgroundColors];
    newColors[index] =
      newColors[index] === data[index] ? "transparent" : data[index];
    setBackgroundColors(newColors);
    console.log(name);
  };

  return (
    <ul className="list-group">
      {modifiedData.map((element, index) => (
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
