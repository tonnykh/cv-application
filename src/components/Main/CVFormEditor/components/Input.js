
const Input = (props) => {

    const { 
        name,
        onChange,
        placeholder
    } = props 

    return (
        <input 
            type="text"
            name={name}
            placeholder={placeholder}
            onChange={(e) => onChange(e)}
        />
    )
}

export default Input;
