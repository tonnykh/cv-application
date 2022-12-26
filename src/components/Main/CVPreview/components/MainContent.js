import Experience from "./Experience";

const MainContent = (props) => {
    const { experience, personalInfo } = props;

    const experienceItems = experience.map((experienceItem) => {
        return <Experience key={experienceItem.id} experienceItem={experienceItem} />
    })

    return (
        <main className="main">
            <h3>PROFILE</h3>
            <p>{personalInfo.description}</p>
            <h3>WORK EXPERIENCE</h3>
            {experienceItems}
        </main>
    )
}

export default MainContent;
