import uniqid from 'uniqid';
import Button from "../../Utils/Button";
import ExperienceItem from './ExperienceItem';

const Experience = (props) => {
    const { onChange, onAddExperience, experience, onDeleteExperience } = props;

    const experienceItems = experience.map((experienceItem) => {

        console.log(experienceItem, "EXPERIENCE__ITEM");
        return experience.length > 1 ?
        (
            <div key={experienceItem.id}>
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
        ) :
        (
            <div key={experienceItem.id}>
                <ExperienceItem
                    onChange={onChange}
                    id={experienceItem.id}
                    key={experienceItem.id}
                />
            </div>
        );
    })

    return (
        <form>
            <h3>Experience</h3>
            {experienceItems}
            <Button text="+ Add" onClick={onAddExperience} />
        </form>
    )
}

export default Experience;
