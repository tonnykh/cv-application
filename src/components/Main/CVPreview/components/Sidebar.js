import Contact from "./Contact";
import Education from "./Education";

const Sidebar = (props) => {
    const { personalInfo, education } = props;

    return (
        <div>
            <Contact personalInfo={personalInfo} />
            <Education education={education} />
        </div>
    )
}

export default Sidebar;