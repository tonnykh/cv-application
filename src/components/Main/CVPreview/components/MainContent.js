import Experience from "./Experience";


const MainContent = (props) => {

    const { experience, personalInfo } = props;

    return (
        <div>
            <h3>PROFILE</h3>
            <p>{personalInfo.description}</p>
            <Experience experience={experience} />
        </div>
    )
}

export default MainContent;
