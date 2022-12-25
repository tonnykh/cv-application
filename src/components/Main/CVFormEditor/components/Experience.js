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
            <h2>Experience</h2>
            {experienceItems}
            <Button text="+Add" onClick={onAddExperience} />
        </form>
    )
}

export default Experience;






// const experienceInputs = inputFields.experience;
// experienceInputs.forEach(field => field.key = uniqid());

// const Experience = (props) => {
//     const { onChange, onAddExperience, experience, onDeleteExperience } = props;

//     const experienceSections = experience.map((experienceItem) => {
//         return experienceInputs.map((experienceInput) => {
//             return <Input placeholder={experienceInput.placeholder} name={experienceInput.name} onChange={(e) => onChange(e, experienceItem.id)} key={experienceInput.key} />
//         })
//     })

//     return(
//         <form>
//             <h2>Experience</h2>
//             {experienceSections}
//             <Button text="+Add" onClick={onAddExperience} />
//             <Button text="Delete" onClick={() => onDeleteExperience()}/>
//         </form>
//     )
// }

// export default Experience;
