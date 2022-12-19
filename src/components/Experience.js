import { Component } from "react";

class Experience extends Component {
    render() {
        return (
            <form>
                <input type="text" placeholder="Position" />
                <input type="text" placeholder="Company" />
                <input type="text" placeholder="Your main occupation & daily tasks" />
                <input type="text" placeholder="City" />
                <input type="text" placeholder="From" />
                <input type="text" placeholder="To" />
            </form>
        )
    }
}

export default Experience;
