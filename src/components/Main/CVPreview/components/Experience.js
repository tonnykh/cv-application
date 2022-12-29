const Experience = (props) => {
  const { experienceItem } = props;
  return (
    <div className="experience-item">
      <h4>{experienceItem.position} </h4>
      <h5>
        {experienceItem.company} | {experienceItem.city}{" "}
      </h5>
      <h5>
        {experienceItem.from}-{experienceItem.to}{" "}
      </h5>
      <p>{experienceItem.task} </p>
    </div>
  );
};

export default Experience;
