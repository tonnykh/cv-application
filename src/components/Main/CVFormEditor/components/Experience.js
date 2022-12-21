import Input from "./Input";
import inputFields from "../../Utils/inputFields";
import uniqid from 'uniqid'

const experience = inputFields.experience;
experience.forEach(field => field.key = uniqid());

const Experience = (props) => {
    const{ onChange } = props;

    return(
        <form>
            {experience.map((experienceInput) => {
                return <Input placeholder={experienceInput.placeholder} name={experienceInput.name} onChange={onChange} key={experienceInput.key}/>
            })}
        </form>
    )
}

export default Experience;
