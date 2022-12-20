import { Component } from "react";
import Header from "./Main/Header/Header";
import CVFormEditor from "./Main/CVFormEditor/index";
import CVPreview from "./Main/CVPreview/CVPreview";


class Main extends Component {
    constructor() {
        super();

        this.state = {
            info: {
                text: '',
            },
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (e) => {
        console.log(e.target.value);

        this.setState({
            info: {
                text: e.target.value,
            },
        });
    };

    render() {
        const { info } = this.state;

        return(
            <main>
                <Header />   
                <CVFormEditor onChangePersonal={this.handleChange} />
                <CVPreview view={info} />
            </main>
        )
    }
}

export default Main;
