import Input from "./Input";
import inputFields from "../../Utils/inputFields";
import uniqid from 'uniqid';
import Button from "../../Utils/Button";


const experience = inputFields.experience;
experience.forEach(field => field.key = uniqid());

const Experience = (props) => {
    const{ onChange, onAddExperience, countExperience } = props;

    let experienceItems = [];

    for (let i = 0; i < countExperience; i++) {
        experienceItems.push( experience.map((experienceInput) => {
            return <Input placeholder={experienceInput.placeholder} name={experienceInput.name} onChange={(e) => onChange(e, experienceInput.id)} key={experienceInput.key}/>})
            );
    }
    return(
        <form>
            <h2>Experience</h2>
            {/* {experience.map((experienceInput) => {
                return <Input placeholder={experienceInput.placeholder} name={experienceInput.name} onChange={onChange} key={experienceInput.key}/>
            })} */}
            {experienceItems}
            <Button text="+Add" onClick={onAddExperience} />
        </form>
    )
}

export default Experience;
