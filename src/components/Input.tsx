type Props = {
    inputType ?: string //Setting default input to color
    specification ?: string //Setting default color (Declared below)
}

function Input({inputType = 'color', specification = '#85a16a'}: Props) {
  return (
    <input type={inputType} value={specification}></input>
  )
}

export default Input