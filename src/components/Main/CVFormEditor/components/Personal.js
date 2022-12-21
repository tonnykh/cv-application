import Input from "./Input";
import inputFields from "../../Utils/inputFields";
import uniqid from "uniqid"

const personal = inputFields.personal;

personal.forEach(field => field.key = uniqid());

const Personal = (props) => {
    const { onChange } = props;

    return (
        <form>
            {personal.map((inputField) => {
                return <Input placeholder={inputField.placeholder} name={inputField.name} onChange={onChange}  key={inputField.key}/>
            })}
        </form>
    )
}

export default Personal;
