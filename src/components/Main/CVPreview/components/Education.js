
const Education = (props) => {
    const { education } = props;

    return (
        <section>
            <h3>EDUCATION</h3>
            <p>{education.degree}</p>
            <p>{education.subject}</p>
            <p>{education.university_name}</p>
            <p>{education.city}</p>
            <p><span>{education.from}</span>-{education.to}</p>
        </section>
    )
}

export default Education;
