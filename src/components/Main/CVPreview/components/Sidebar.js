import Contact from "./Contact";
import Education from "./Education";

const Sidebar = (props) => {
  const { personalInfo, education } = props;

  const educationItems = education.map((educationItem) => {
    return <Education key={educationItem.id} educationItem={educationItem} />;
  });

  return (
    <div className="CVPreview-sidebar">
      <section className="contact">
        <h3>CONTACT</h3>
        <Contact personalInfo={personalInfo} />
      </section>
      <section className="education">
        <h3>EDUCATION</h3>
        {educationItems}
      </section>
    </div>
  );
};

export default Sidebar;
