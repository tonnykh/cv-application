import { Component } from "react";

class Education extends Component {
    render() {
        return (
            <form>
                <input type="text" placeholder="University Name" />
                <input type="text" placeholder="City" />
                <input type="text" placeholder="Degree" />
                <input type="text" placeholder="Subject" />
                <input type="text" placeholder="From" />
                <input type="text" placeholder="To" />
            </form>
        )
    }
}

export default Education;
