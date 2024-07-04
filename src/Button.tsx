import { useState } from "react";

type Props = {
  data: string;
};

function Button({ data }: Props) {
  const [isSecondary, setIsSecondary] = useState(false);

  const handleClick = () => {
    if (!isSecondary) {
      setIsSecondary(true);
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`btn ${isSecondary ? "btn-secondary" : "btn-primary"}`}
    >
      {isSecondary ? "Calculando..." : data}
    </button>
  );
}

export default Button;
