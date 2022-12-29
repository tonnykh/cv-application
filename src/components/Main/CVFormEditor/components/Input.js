const Input = (props) => {
  const { name, onChange, placeholder, value, type = "text" } = props;

  return type === "textarea" ? (
    <textarea
      name={name}
      placeholder={placeholder}
      onChange={(e) => onChange(e)}
      value={value?.[name]}
    />
  ) : (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={(e) => onChange(e)}
      value={value?.[name]}
    />
  );
};

export default Input;
