import Button from "../Utils/Button";

const Header = (props) =>  {
    const { autofill } = props;

    return(
        <header>
            <h2>CV Builder</h2>
            <Button text="Autofill" onClick={autofill} />
        </header>
    )
}

export default Header;
