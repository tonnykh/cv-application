import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";

const CVPreview = (props) => {

    const { personalInfo, education, experience, state } = props;
    console.log(education, 'CVPreview-EDUCATION---');

    return(
        <div className={`CVPreview ${state ? 'clicked': 'not-clicked'}`}>
            <Header personalInfo={personalInfo} />
            <Sidebar personalInfo={personalInfo} education={education} />
            <MainContent personalInfo={personalInfo} experience={experience} />
        </div>
    )
}

export default CVPreview;