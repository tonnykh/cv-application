
const Contact = (props) => {
    const { personalInfo } = props;

    return (
        <div className="contact-item">
            <p>{personalInfo.email}</p>
            <p>{personalInfo.address}</p>
            <p>{personalInfo.phone_number}</p>
        </div>
    )
}

export default Contact;
