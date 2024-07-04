type Props = {
  data: string;
  func?: () => void;
};

function Button({ data, func }: Props) {
  return (
    <button type="button" onClick={func} className="Btn">
      {data}
    </button>
  );
}

export default Button;
