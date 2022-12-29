import Button from "../Utils/Button";
import GithubButton from "../Utils/GithubButton";

import { RiEditLine, RiEyeLine, RiCodeLine } from "react-icons/ri";

const Header = (props) =>  {
    const { autofill, preview, state } = props;

    return(
        <header className="main-header">
            <h2>CV Builder</h2>
            <div className="made-by">
                <h3>Created by </h3>
                <GithubButton
                    username="tonny kh"
                    projectName="cv-application"
                />
            </div>
            <div className="header-buttons">
                <Button text="Autofill" onClick={autofill} icon={<RiEditLine />} />
                <Button text={state ? "Editor" : "Preview"} className={"preview-button"} onClick={preview} icon={!state ? <RiEyeLine /> : <RiCodeLine />} />
            </div>
        </header>
    )
}

export default Header;
