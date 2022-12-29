import Button from "../Utils/Button";
import GithubButton from "../Utils/GithubButton";

const Header = (props) =>  {
    const { autofill, preview, state } = props;

    return(
        <header>
            <h2>CV Builder</h2>
            <div className="made-by">
                <h3>Created by </h3>
                <GithubButton
                    username="tonny kh"
                    projectName="cv-application"
                />
            </div>
            <div className="header-buttons">
                <Button text="Autofill" onClick={autofill} />
                <Button text={state ? "Editor" : "Preview"} className={"preview-button"} onClick={preview} />
            </div>
        </header>
    )
}

export default Header;
