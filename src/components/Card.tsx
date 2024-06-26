import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}
interface CardBodyProps {
  title: string;
  text?: string; //This makes a prop optional thanks to the question mark.
}

function Card(props: CardProps) {
  const { children } = props;
  return (
    <div
      className="card"
      style={{
        width: "350px",
      }}
    >
      <div className="card-body">{children}</div>
    </div>
  );
}

export function CardBody(props: CardBodyProps) {
  const { title, text } = props;
  return (
    //Open fragments
    <>
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{text}</p>
    </> //Close Fragments, this wouldn´t be returned without fragments.
  );
}

export default Card;
