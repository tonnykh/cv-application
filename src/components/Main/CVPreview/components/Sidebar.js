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


//  const handleDeleteExperience = (id) => {
//     setCv((prevState) => {
//       const newExperience = prevState.experience.filter(
//         (experienceItem) => experienceItem.id !== id
//       )
//       return { ...prevState, experience: [...newExperience] }
//     })
//   }

// handleChangeEducation = (e, id) => {
//         const newEducation = this.state.education.map(educationItem => {
//             if ( educationItem.id === id ) {
//                 return { ...educationItem, [e.target.name] : e.target.value };
//             } else {
//                 return educationItem;
//             }
//         })
 
//         this.setState({
//             education: newEducation
//         }, () => console.log(this.state.education, '1----EDUCATION___'));

//         console.log(id, 'TARGET____ID');
//         console.log(this.state.education, "EDUCATION______");
//     }