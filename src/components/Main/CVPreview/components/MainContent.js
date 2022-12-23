import Experience from "./Experience";

const MainContent = (props) => {
    const { experience, personalInfo } = props;

    const experienceItems = experience.map((experienceItem) => {
        return <Experience key={experienceItem.id} experienceItem={experienceItem} />
    })

    return (
        <div>
            <h3>PROFILE</h3>
            <p>{personalInfo.description}</p>
            <h3>WORK EXPERIENCE</h3>
            {experienceItems}
        </div>
    )
}

export default MainContent;
