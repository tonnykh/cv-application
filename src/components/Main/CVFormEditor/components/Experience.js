import React from 'react';
import uniqid from 'uniqid';
import Button from "../../Utils/Button";
import ExperienceItem from './ExperienceItem';

const Experience = (props) => {
    const { onChange, onAddExperience, experience, onDeleteExperience } = props;

    const experienceItems = experience.map((experienceItem) => {

        console.log(experienceItem, "EXPERIENCE__ITEM");
        return experience.length > 1 ?
        (
            <React.Fragment key={experienceItem.id}>
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
            </React.Fragment>
        ) :
        (
            <React.Fragment key={experienceItem.id}>
                <ExperienceItem
                    onChange={onChange}
                    id={experienceItem.id}
                    key={experienceItem.id}
                />
            </React.Fragment>
        );
    })

    return (
        <form>
            <h2>Experience</h2>
            {experienceItems}
            <Button text="+ Add" onClick={onAddExperience} />
        </form>
    )
}

export default Experience;
