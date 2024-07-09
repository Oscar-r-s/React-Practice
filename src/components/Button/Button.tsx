import styles from './Button.module.css'

type Props = {
  data: string;
  func?: () => void;
};

function Button({ data, func }: Props) {
  const class_name = [styles.button, styles.padded].join(' ')
  return (
    <button type="button" onClick={func} className={class_name}>
      {data}
    </button>
  );
}

export default Button;
