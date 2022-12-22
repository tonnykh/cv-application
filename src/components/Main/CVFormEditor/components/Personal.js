import Input from "./Input";
import inputFields from "../../Utils/inputFields";
import uniqid from "uniqid"

const personal = inputFields.personal;
personal.forEach(field => field.key = uniqid());

const Personal = (props) => {
    const { onChange } = props;

    return (
        <form>
            <h2>Personal Information</h2>
            {personal.map((personalInput) => {
                return <Input placeholder={personalInput.placeholder} name={personalInput.name} onChange={onChange} key={personalInput.key}/>
            })}
        </form>
    )
}

export default Personal;
