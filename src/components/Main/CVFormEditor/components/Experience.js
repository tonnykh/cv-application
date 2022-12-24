import inputFields from "../../Utils/inputFields";
import Input from "./Input";
import uniqid from 'uniqid';
import Button from "../../Utils/Button";

const experienceInputs = inputFields.experience;
experienceInputs.forEach(field => field.key = uniqid());

const Experience = (props) => {
    const { onChange, onAddExperience, experience, onDeleteExperience } = props;

    const experienceSections = experience.map((experienceItem) => {
        return experienceInputs.map((experienceInput) => {
            return <Input placeholder={experienceInput.placeholder} name={experienceInput.name} onChange={(e) => onChange(e, experienceItem.id)} key={experienceInput.key} />
        })
    })

    return(
        <form>
            <h2>Experience</h2>
            {experienceSections}
            <Button text="+Add" onClick={onAddExperience} />
            <Button text="Delete" onClick={() => onDeleteExperience()}/>
        </form>
    )
}

export default Experience;
