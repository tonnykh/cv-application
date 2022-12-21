import Input from './Input';
import uniqid from 'uniqid';

const inputFields = [
    {
        name: 'university_name',
        placeholder: 'University Name'
    },
    {
        name: 'city',
        placeholder: 'City'
    },
    {
        name: 'degree',
        placeholder: 'Degree'
    },
    {
        name: 'subject',
        placeholder: 'Subject'
    },
    {
        name: 'from',
        placeholder: 'From'
    },
    {
        name: 'to',
        placeholder: 'To'
    }
]

inputFields.forEach(field => field.key = uniqid());

const Education = (props) => {
   const { onChange } = props;

    return (
        <form>
            {inputFields.map((inputField) => {
                return <Input placeholder={inputField.placeholder} name={inputField.name} onChange={onChange} key={inputField.key}/>
            })}
        </form>
    )
}

// class Education extends Component {
//     render() {
//         return (
//             <form>
//                 <input type="text" placeholder="University Name" />
//                 <input type="text" placeholder="City" />
//                 <input type="text" placeholder="Degree" />
//                 <input type="text" placeholder="Subject" />
//                 <input type="text" placeholder="From" />
//                 <input type="text" placeholder="To" />
//             </form>
//         )
//     }
// }

export default Education;
