import Personal from "./components/Personal";
import Education from "./components/Education";
import Experience from "./components/Experience";

const CVFormEditor = (props) => {
    const { onChangePersonal } = props;

        return (
            <div>
                <Personal onChange={onChangePersonal} />
                <br />
                <Education />
                <br />
                <Experience />
            </div>
        )
    }

export default CVFormEditor;