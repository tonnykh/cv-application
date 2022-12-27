import React from 'react';
import uniqid from 'uniqid';
import Button from "../../Utils/Button";
import ExperienceItem from './ExperienceItem';

const Experience = (props) => {
    const { onChange, onAddExperience, experience, onDeleteExperience } = props;

    const experienceItems = experience.map((experienceItem, index) => {

        console.log(experienceItem, "EXPERIENCE__ITEM");
        return experience.length > 1 ? (
          <div className="experience-item" key={experienceItem.id}>
            <h2>Experience #{index + 1}</h2>

            <ExperienceItem
              onChange={onChange}
              id={experienceItem.id}
              key={experienceItem.id}
              value={experienceItem}
            />
            <Button
              text="Delete"
              key={uniqid()}
              onClick={() => onDeleteExperience(experienceItem.id)}
            />
          </div>
        ) : (
          <div className="experience-item" key={experienceItem.id}>
            <h2>Experience</h2>
            <ExperienceItem
              onChange={onChange}
              id={experienceItem.id}
              key={experienceItem.id}
            />
          </div>
        );
    })

    return (
        <form className='experience'>
            {experienceItems}
            <Button text="+ Add" onClick={onAddExperience} />
        </form>
    )
}

export default Experience;
