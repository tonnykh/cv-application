import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";

const CVPreview = (props) => {

    const { personalInfo, education, experience, skills } = props;
    console.log(personalInfo, 'CV');

    return(
        <div>
            <Header personalInfo={personalInfo} />
            <Sidebar personalInfo={personalInfo} education={education} skills={skills} />
            <MainContent personalInfo={personalInfo} experience={experience} />
        </div>
    )
}

export default CVPreview;