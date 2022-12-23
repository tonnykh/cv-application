import Input from './Input';
import inputFields from '../../Utils/inputFields';
import uniqid from 'uniqid';
import Button from '../../Utils/Button';

const educationInputs = inputFields.education;
educationInputs.forEach(field => field.key = uniqid());

const Education = (props) => {
    const { onChange, onAddEducation, education } = props;

    const educationSections = education.map((educationItem) => {
        return educationInputs.map((educationInput) => {
            return <Input placeholder={educationInput.placeholder} name={educationInput.name} onChange={(e) => onChange(e, educationItem.id)} key={educationInput.key} />
        })
    })

    console.log(education, "EDU------");

    return (
        <form>
            <h2>Education</h2>
            {educationSections}
            <Button text="+Add" onClick={onAddEducation} />
        </form>
    )
}

export default Education;
