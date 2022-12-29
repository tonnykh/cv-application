const Education = (props) => {
  const { educationItem } = props;

  return (
    <div className="education-item">
      <h4>{educationItem.degree}</h4>
      <h5>{educationItem.subject}</h5>
      <h5>{educationItem.university_name}</h5>
      <h5>{educationItem.city}</h5>
      <p>
        <span>{educationItem.from}</span>-{educationItem.to}
      </p>
    </div>
  );
};

export default Education;
