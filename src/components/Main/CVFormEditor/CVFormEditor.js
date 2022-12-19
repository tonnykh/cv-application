import Personal from "./components/Personal";
import Education from "./components/Education";
import Experience from "./components/Experience";
import { Component } from "react";

class CVFormEditor extends Component {
    render() {
        return (
            <div>
                <Personal />
                <br />
                <Education />
                <br />
                <Experience />
            </div>
        )
    }
}

export default CVFormEditor;
