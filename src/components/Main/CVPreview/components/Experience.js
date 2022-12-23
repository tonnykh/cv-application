
const Experience = (props) => {
    const { experienceItem } = props
    console.log(experienceItem, "__EXPERIENCE___")

    return (
        <section>
            <p>{experienceItem.position}</p>
            <p>{experienceItem.company} | {experienceItem.city} | {experienceItem.from}-{experienceItem.to}</p>
            <p>{experienceItem.task}</p>
        </section>
    )
}

export default Experience;
