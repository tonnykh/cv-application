import Input from './Input';
import inputFields from '../../Utils/inputFields';
import uniqid from 'uniqid';
import Button from '../../Utils/Button';

const education = inputFields.education;
education.forEach(field => field.key = uniqid());

const Education = (props) => {
   const { onChange, onAddEducation, countEducation } = props;

   let educationItems = [];

   for (let i = 0; i < countEducation; i++) {
    educationItems.push( education.map((educationInput) => {
        return <Input placeholder={educationInput.placeholder} name={educationInput.name} onChange={onChange} key={educationInput.key}/>})
        );
   }

    return (
        <form>
            <h2>Education</h2>
            {educationItems}
            <Button text="+Add" onClick={onAddEducation} />
        </form>
    )
}

export default Education;
