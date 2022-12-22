
const Header = (props) => {
    const { personalInfo } = props

    return (
        <header>
            <h1>
                <span>
                    {personalInfo.first_name.toUpperCase()}
                </span>
                    {personalInfo.last_name.toUpperCase()}
            </h1>
        </header>
    )
}

export default Header;