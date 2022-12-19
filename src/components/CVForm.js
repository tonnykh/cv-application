import Personal from "./Personal";
import Education from "./Education";
import Experience from "./Experience";
import { Component } from "react";

class CVForm extends Component {
    render() {
        return (
            <form>
                <Personal />
                <br />
                <Education />
                <br />
                <Experience />
            </form>
        )
    }
}

export default CVForm;
