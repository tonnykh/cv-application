
const Education = (props) => {
    const { educationItem } = props;
    console.log(educationItem, "__EDUC___VIEW")

    return (
      <div className="education-item">
        <h4>{educationItem.degree}</h4>
        <p>{educationItem.subject}</p>
        <p>{educationItem.university_name}</p>
        <p>{educationItem.city}</p>
        <p>
          <span>{educationItem.from}</span>-{educationItem.to}
        </p>
      </div>
    );
}

export default Education;
