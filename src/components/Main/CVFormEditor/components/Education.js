import React from 'react';
import uniqid from 'uniqid';
import Button from '../../Utils/Button';
import EducationItem from './EducationItem';

const Education = (props) => {
    const { onChange, onAddEducation, education, onDeleteEducation } = props;

    const educationItems = education.map((educationItem) => {
        return education.length > 1 ? 
            (
                <React.Fragment key={educationItem.id}>
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
                </React.Fragment>
            )  :    
            ( 
                <React.Fragment key={educationItem.id}>
                    <EducationItem 
                        onChange={onChange} 
                        id={educationItem.id} 
                        key={educationItem.id} 
                    /> 
                </React.Fragment>
            );
    })

    return (
        <form>
            <h2>Education</h2>
            {educationItems}
            <Button text="+ Add" onClick={onAddEducation} />
        </form>
    )
}

export default Education;
