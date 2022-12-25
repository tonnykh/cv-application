import Button from "../Utils/Button";

const Header = (props) =>  {
    const { autofill } = props;

    return(
        <header>
            <h1>CV Builder</h1>
            <Button text="Autofill" onClick={autofill} />
        </header>
    )
}

export default Header;
