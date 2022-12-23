import Contact from "./Contact";
import Education from "./Education";

const Sidebar = (props) => {
    const { personalInfo, education } = props;

    const educationItems = education.map((educationItem) => {
        return <Education key={educationItem.id} educationItem={educationItem} />
    })

    return (
        <div>
            <Contact personalInfo={personalInfo} />
            <h3>EDUCATION</h3>
            {educationItems}
        </div>
    )
}

export default Sidebar;