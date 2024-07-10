import styles from "./Button.module.css"; //Importing button styles from the module Button.module.css

type Props = {
  data: string;
  func?: () => void;
};

function Button({ data, func }: Props) {
  const class_name = [styles.button, styles.padded].join(" "); //Creating a variable 'class_name' so that our button gets those classes => className = {class_name}
  return (
    <button type="button" onClick={func} className={class_name}>
      {data}
    </button>
  );
}

export default Button;
