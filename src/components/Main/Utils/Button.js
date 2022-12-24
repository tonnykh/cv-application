
const Button = (props) => {
    const { text, onClick } = props
    
    return (
        <button onClick={(e) => onClick(e)}>{text}</button>
    )
}

export default Button;
