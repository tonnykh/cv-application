import Input from './Input';
import inputFields from '../../Utils/inputFields';
import uniqid from 'uniqid';

const education = inputFields.education;

education.forEach(field => field.key = uniqid());

const Education = (props) => {
   const { onChange } = props;

    return (
        <form>
            {education.map((educationInput) => {
                return <Input placeholder={educationInput.placeholder} name={educationInput.name} onChange={onChange} key={educationInput.key}/>
            })}
        </form>
    )
}

export default Education;
