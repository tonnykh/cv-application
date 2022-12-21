import Input from "./Input";
import uniqid from "uniqid"

const inputFields = [
    {   
        name: 'first_name',
        placeholder: 'First Name',
    },
    {   
        name: 'last_name',
        placeholder: 'Last Name',
    },
    {
        name: 'address',
        placeholder: 'Address',
    },
    {
        name: 'email',
        placeholder: 'Email',
    },
    {
        name: 'phone_number',
        placeholder: 'Phone Number',
    },
    {
        name: 'description',
        placeholder: 'Tell us something about yourself!',
    }
]

inputFields.forEach(field => field.key = uniqid());

const Personal = (props) => {
    const { onChange } = props;

    return (
        <form>
            {inputFields.map((inputField) => {
                return <Input placeholder={inputField.placeholder} name={inputField.name} onChange={onChange}  key={inputField.key}/>
            })}
        </form>
    )
}

export default Personal;
