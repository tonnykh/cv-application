import Input from "./Input";
import inputFields from "../../Utils/inputFields";
import uniqid from 'uniqid';
import Button from "../../Utils/Button";


const experienceInputs = inputFields.experience;
experienceInputs.forEach(field => field.key = uniqid());

const Experience = (props) => {
    const { onChange, onAddExperience, experience } = props;

    const experienceSections = experience.map((experienceItem) => {
        return experienceInputs.map((experienceInput) => {
            return <Input placeholder={experienceInput.placeholder} name={experienceInput.name} onChange={(e) => onChange(e, experienceItem.id)} key={experienceInput.key} />
        })
    })

    // for (let i = 0; i < countExperience; i++) {
    //     experienceItems.push( experience.map((experienceInput) => {
    //         return <Input placeholder={experienceInput.placeholder} name={experienceInput.name} onChange={(e) => onChange(e, experienceInput.id)} key={experienceInput.key}/>})
    //         );
    // }
    return(
        <form>
            <h2>Experience</h2>
            {/* {experience.map((experienceInput) => {
                return <Input placeholder={experienceInput.placeholder} name={experienceInput.name} onChange={onChange} key={experienceInput.key}/>
            })} */}
            {experienceSections}
            <Button text="+Add" onClick={onAddExperience} />
        </form>
    )
}

export default Experience;
