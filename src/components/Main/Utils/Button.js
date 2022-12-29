
const Button = (props) => {
    const { text, onClick, className = '' } = props
    
    return (
        <button
            className={className}
            onClick={(e) => onClick(e)}
        >
            {text}
        </button>
    )
}

export default Button;
