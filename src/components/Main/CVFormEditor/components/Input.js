
const Input = (props) => {

    const { 
        name,
        onChange,
        placeholder,
        value,
    } = props 

    return (
        <input 
            type="text"
            name={name}
            placeholder={placeholder}
            onChange={(e) => onChange(e)}
            value={value?.[name]}
        />
    )
}

export default Input;


// setCv((prevState) => {
//     const newExperience = prevState.experience.filter(
//       (experienceItem) => experienceItem.id !== id
//     )
//     return { ...prevState, experience: [...newExperience] }
//   })