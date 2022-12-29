import Input from "./Input";
import inputFields from "../../Utils/inputFields";
import uniqid from "uniqid";

const personal = inputFields.personalInfo;
personal.forEach((field) => (field.key = uniqid()));

const Personal = (props) => {
  const { onChange, personalInfo } = props;

  console.log(personal, "PERSONAL__ITEM");

  return (
    <form className="personal">
      <h2>Personal Information</h2>
      {personal.map((personalInput) => {
        return (
          <Input
            placeholder={personalInput.placeholder}
            name={personalInput.name}
            onChange={(e) => onChange(e, personalInput)}
            key={personalInput.key}
            value={personalInfo}
            type={personalInput.type}
          />
        );
      })}
    </form>
  );
};

export default Personal;
