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
    onDeleteExperience,
    state,
  } = props;

  return (
    <div className={`CVFormEditor ${!state ? "clicked" : "not-clicked"}`}>
      <Personal onChange={onChangePersonal} personalInfo={personalInfo} />
      <Education
        onChange={onChangeEducation}
        onAddEducation={onAddEducation}
        onDeleteEducation={onDeleteEducation}
        education={education}
      />
      <Experience
        onChange={onChangeExperience}
        onAddExperience={onAddExperience}
        experience={experience}
        onDeleteExperience={onDeleteExperience}
      />
    </div>
  );
};

export default CVFormEditor;
