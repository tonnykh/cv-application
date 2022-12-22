
const Contact = (props) => {
    const { personalInfo } = props;

    return (
        <section>
            <h3>CONTACT</h3>
            <p>{personalInfo.email}</p>
            <p>{personalInfo.address}</p>
            <p>{personalInfo.phone_number}</p>
        </section>
    )
}

export default Contact;
