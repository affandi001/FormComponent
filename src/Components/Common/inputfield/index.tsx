type Props = {
  onChange: (str: string) => void;
  placeholder: string;
  name: string;
  value?: string;
};
function Input({ onChange, name, placeholder, value = "" }: Props) {
  return (
    <div className="input">
    <input
      onChange={event => onChange(event.target.value)}
      name={name}
      placeholder={placeholder}
      value={value}
    />
    </div>
  );
}

export default Input;