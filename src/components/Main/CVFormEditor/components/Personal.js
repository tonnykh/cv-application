
const Personal = (props) => {
    const { onChange } = props;

    return (
        <form>
            <input 
                onChange={(e) => onChange(e)}
                type="text" 
                placeholder="First Name"
            />
            <input type="text" placeholder="Last Name"></input>
            <input type="text" placeholder="Address"></input>
            <input type="text" placeholder="Email"></input>
            <input type="text" placeholder="Phone Number"></input>
            <input type="text" placeholder="Tell us something about yourself!"></input>
        </form>
    )

}

export default Personal;
