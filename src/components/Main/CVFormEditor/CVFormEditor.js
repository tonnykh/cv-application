import Personal from "./components/Personal";
import Education from "./components/Education";
import Experience from "./components/Experience";

const CVFormEditor = (props) => {
    const { 
        onChangePersonal, 
        onChangeEducation, 
        onChangeExperience, 
        onAddEducation, 
        onAddExperience, 
        education, 
        experience,
        personalInfo,

        onDeleteEducation, 
        onDeleteExperience 
    } = props;


    console.log(education, "EDITOR EDUCATION____")
        return (
            <div className="CVFormEditor">
                <Personal
                    onChange={onChangePersonal}
                    personalInfo={personalInfo}
                />
                <br />
                <Education 
                    onChange={onChangeEducation} 
                    onAddEducation={onAddEducation} 

                    onDeleteEducation={onDeleteEducation}
                    education={education}
                />
                <br />
                <Experience 
                    onChange={onChangeExperience}
                    onAddExperience={onAddExperience} 

                    experience={experience}
                    onDeleteExperience={onDeleteExperience}
                />
                <br />
            </div>
        )
    }

export default CVFormEditor;
