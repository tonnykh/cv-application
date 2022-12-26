
const Header = (props) => {
    const { personalInfo } = props

    return (
        <header className="header">
            <h1>
                <span className="first-name">
                    {personalInfo.first_name.toUpperCase()}
                </span>
                    {personalInfo.last_name.toUpperCase()}
            </h1>
            <h2 className="professional-title">{personalInfo.professional_title}</h2>
        </header>
    )
}

export default Header;