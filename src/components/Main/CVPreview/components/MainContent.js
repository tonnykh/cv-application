import Experience from "./Experience";

const MainContent = (props) => {
    const { experience, personalInfo } = props;

    const experienceItems = experience.map((experienceItem) => {
        return <Experience key={experienceItem.id} experienceItem={experienceItem} />
    })

    return (
        <main className="main">
            <section className="profile">
                <h3>PROFILE</h3>
                <p>{personalInfo.description}</p>
            </section>
            <section className="work-experience">
                <h3>WORK EXPERIENCE</h3>
                {experienceItems}
            </section>
        </main>
    )
}

export default MainContent;
