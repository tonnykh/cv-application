import Personal from "./components/Personal";
import Education from "./components/Education";
import Experience from "./components/Experience";

const CVFormEditor = (props) => {
    const { onChangePersonal, onChangeEducation, onChangeExperience, onAddEducation, onAddExperience, education, experience } = props;

        return (
            <div>
                <Personal onChange={onChangePersonal} />
                <br />
                <Education 
                    onChange={onChangeEducation} 
                    onAddEducation={onAddEducation} 
                    // countEducation={countEducation}
                    education={education}
                />
                <br />
                <Experience 
                    onChange={onChangeExperience}
                    onAddExperience={onAddExperience} 
                    experience={experience}
                />
                <br />
            </div>
        )
    }

export default CVFormEditor;