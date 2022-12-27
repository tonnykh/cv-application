import uniqid from 'uniqid';
import Button from '../../Utils/Button';
import EducationItem from './EducationItem';

const Education = (props) => {
    const { onChange, onAddEducation, education, onDeleteEducation } = props;

    const educationItems = education.map((educationItem) => {
        return education.length > 1 ? 
            (
                <div key={educationItem.id}>
                    <EducationItem 
                        onChange={onChange} 
                        id={educationItem.id} 
                        key={educationItem.id}
                        value={educationItem}
                    />
                    <Button 
                        text="Delete" 
                        key={uniqid()}  
                        onClick={() => onDeleteEducation(educationItem.id)}
                    />
                </div>
            )  :    
            ( 
                <div key={educationItem.id}>
                    <EducationItem 
                        onChange={onChange} 
                        id={educationItem.id} 
                        key={educationItem.id} 
                    /> 
                </div>
            );
    })

    return (
        <form>
            <h3>Education</h3>
            {educationItems}
            <Button text="+ Add" onClick={onAddEducation} />
        </form>
    )
}

export default Education;
