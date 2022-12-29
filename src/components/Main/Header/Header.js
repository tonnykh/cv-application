import Button from "../Utils/Button";

const Header = (props) =>  {
    const { autofill, preview, state } = props;

    return(
        <header>
            <h2>CV Builder</h2>
            <Button text="Autofill" onClick={autofill} />
            <Button text={state ? "Editor" : "Preview"} className={"preview-button"} onClick={preview} />
        </header>
    )
}

export default Header;
