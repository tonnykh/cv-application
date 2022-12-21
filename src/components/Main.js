import { Component } from "react";
import Header from "./Main/Header/Header";
import CVFormEditor from "./Main/CVFormEditor/index";
import CVPreview from "./Main/CVPreview/CVPreview";

class Main extends Component {
    constructor() {
        super();

        this.state = {
            info: {
                first_name: '',
                last_name: '',
                address: '',
                email: '',
                phone_number: '',
                description: ''
            }
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (e) => {
        let newInfo = {
            ...this.state.info,
            [e.target.name]: e.target.value
        }

        this.setState({
            info: newInfo         
        });

        console.log(e.target.name, '---NAME');
        console.log(e.target.value, '---VALUE')
    };

    render() {
        const { info } = this.state;

        return(
            <main>
                <Header />   
                <CVFormEditor onChangePersonal={this.handleChange} cv={info}/>
                <CVPreview cv={info} />
            </main>
        )
    }
}

export default Main;
