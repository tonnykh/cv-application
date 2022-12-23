
const Education = (props) => {
    const { educationItem } = props;
    console.log(educationItem,"__EDUC___VIEW")

    return (
        <section>
            <p>{educationItem.degree}</p>
            <p>{educationItem.subject}</p>
            <p>{educationItem.university_name}</p>
            <p>{educationItem.city}</p>
            <p><span>{educationItem.from}</span>-{educationItem.to}</p>
        </section>
    )
}

export default Education;
