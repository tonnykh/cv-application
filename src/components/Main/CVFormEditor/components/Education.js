import Input from './Input';
import inputFields from '../../Utils/inputFields';
import uniqid from 'uniqid';
import Button from '../../Utils/Button';
import EducationItem from './EducationItem';

// const educationInputs = inputFields.education;
// educationInputs.forEach(field => field.key = uniqid());

const Education = (props) => {
    const { id, onChange, onAddEducation, education, onDeleteEducation } = props;

    console.log(education.length, 'LENGTH')
    console.log(uniqid(), "UNIQID")

    // const deleteButton = () => {
    //     return education.length > 1 && <Button />; 
    // }

    const educationSections = education.map((educationItem) => {
        // return (
        //     educationInputs.map((educationInput) => {
        //     return <Input placeholder={educationInput.placeholder} name={educationInput.name} onChange={(e) => onChange(e, educationItem.id)} key={educationInput.key} /> 
        //     })
        // )
        
        return education.length > 1 ? 
            (
                <div key={educationItem.id}>
                    <EducationItem onChange={onChange} id={educationItem.id} key={educationItem.id} />
                    <Button text="Delete" key={uniqid()}/>
                </div>
            )  :    
            ( <EducationItem onChange={onChange} id={educationItem.id} key={educationItem.id} /> );
        
        

    })

    console.log(educationSections, "EDU---SECTION---");

    return (
        <form>
            <h2>Education</h2>
            {educationSections}
            <Button text="+Add" onClick={onAddEducation} />
        </form>
    )
}

export default Education;
