import Input from "./Input"
import inputFields from "../../Utils/inputFields"
import uniqid from 'uniqid';

const educationInputs = inputFields.education;
educationInputs.forEach(field => field.key = uniqid());

const EducationItem = (props) => { 
    const { onChange, id } = props;

   return educationInputs.map((educationInput) => {
        return <Input 
                    placeholder={educationInput.placeholder} 
                    name={educationInput.name} 
                    onChange={(e) => onChange(e, id)} 
                    key={educationInput.key} 
                /> 
    })
}

export default EducationItem;