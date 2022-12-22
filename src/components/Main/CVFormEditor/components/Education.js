import Input from './Input';
import inputFields from '../../Utils/inputFields';
import uniqid from 'uniqid';
import Button from '../../Utils/Button';

const education = inputFields.education;
education.forEach(field => field.key = uniqid());

const Education = (props) => {
   const { onChange, onAdd, countEducation } = props;

   let experienceItems = [];

   for (let i = 0; i < countEducation; i++) {
    experienceItems.push( education.map((educationInput) => {
        return <Input placeholder={educationInput.placeholder} name={educationInput.name} onChange={onChange} key={educationInput.key}/>})
        );
   }

    return (
        <form>
            <h2>Education</h2>
            {experienceItems}
            <Button text="+Add" onClick={onAdd} />
        </form>
    )
}

export default Education;
