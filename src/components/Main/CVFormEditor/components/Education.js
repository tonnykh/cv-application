import Input from './Input';
import inputFields from '../../Utils/inputFields';
import uniqid from 'uniqid';
import Button from '../../Utils/Button';

const educationInputs = inputFields.education;
educationInputs.forEach(field => field.key = uniqid());

const Education = (props) => {
    const { onChange, onAddEducation, education } = props;

    let educationSection = educationInputs.map((educationInput) => {
        return <Input placeholder={educationInput.placeholder} name={educationInput.name} onChange={(e) => onChange(e, education.id)} key={educationInput.key}/>
    })

    console.log(education, "EDU------");

    return (
        <form>
            <h2>Education</h2>
            {educationSection}
            <Button text="+Add" onClick={onAddEducation} />
        </form>
    )
}

export default Education;
