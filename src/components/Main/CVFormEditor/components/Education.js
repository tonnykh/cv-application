import React from 'react';
import uniqid from 'uniqid';
import Button from '../../Utils/Button';
import EducationItem from './EducationItem';

import { RiDeleteBin6Line } from "react-icons/ri";

const Education = (props) => {
    const { onChange, onAddEducation, education, onDeleteEducation } = props;

    const educationItems = education.map((educationItem, index) => {
        return education.length > 1 ? (
          <div className="education-item" key={educationItem.id}>
            <h2>Education #{index + 1}</h2>

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
              icon={<RiDeleteBin6Line />}
            />
          </div>
        ) : (
          <div className="education-item" key={educationItem.id}>
            <h2>Education</h2>
            <EducationItem
              onChange={onChange}
              id={educationItem.id}
              key={educationItem.id}
            />
          </div>
        );
    })

    return (
        <form className='education'>
            {educationItems}
            <Button text="+ Add" onClick={onAddEducation} />
        </form>
    )
}

export default Education;
