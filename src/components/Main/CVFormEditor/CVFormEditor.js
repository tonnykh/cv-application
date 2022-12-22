import Personal from "./components/Personal";
import Education from "./components/Education";
import Experience from "./components/Experience";

const CVFormEditor = (props) => {
    const { onChangePersonal, onChangeEducation, onChangeExperience, onAddEducation, countEducation } = props;

        return (
            <div>
                <Personal onChange={onChangePersonal} />
                <br />
                <Education 
                    onChange={onChangeEducation} 
                    onAdd={onAddEducation} 
                    countEducation={countEducation} 
                />
                <br />
                <Experience onChange={onChangeExperience}/>
                <br />
            </div>
        )
    }

export default CVFormEditor;