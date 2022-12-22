
const Experience = (props) => {

    const { experience } = props
    console.log(experience,"__EXPERIENCE___")

    return (
        <section>
            <h3>WORK EXPERIENCE</h3>
            <p>{experience.position}</p>
            <p>{experience.company} | {experience.city} | {experience.from}-{experience.to}</p>
            <p>{experience.task}</p>
        </section>
    )
}

export default Experience;
