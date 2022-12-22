import Personal from "./components/Personal";
import Education from "./components/Education";
import Experience from "./components/Experience";

const CVFormEditor = (props) => {
    const { onChangePersonal, onChangeEducation, onChangeExperience, onAddEducation, onAddExperience, countEducation, countExperience } = props;

        return (
            <div>
                <Personal onChange={onChangePersonal} />
                <br />
                <Education 
                    onChange={onChangeEducation} 
                    onAddEducation={onAddEducation} 
                    countEducation={countEducation}
                />
                <br />
                <Experience 
                    onChange={onChangeExperience}
                    countExperience={countExperience}
                    onAddExperience={onAddExperience} 
                />
                <br />
            </div>
        )
    }

export default CVFormEditor;