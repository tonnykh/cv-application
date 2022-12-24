import Input from "./Input";
import inputFields from "../../Utils/inputFields";
import uniqid from 'uniqid';

const experienceInputs = inputFields.experience;
experienceInputs.forEach(field => field.key = uniqid());

const ExperienceItem = (props) => {
    const { onChange, id } = props;

    return experienceInputs.map((experienceInput) => {
        return <Input 
                    placeholder={experienceInput.placeholder}
                    name={experienceInput.name}
                    onChange={(e) => onChange(e, id)}
                    key={experienceInput.key}
                />
    })
}

export default ExperienceItem;