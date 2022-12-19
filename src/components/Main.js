import { Component } from "react";
import Header from "./Main/Header/Header";
import CVFormEditor from "./Main/CVFormEditor/index";

class Main extends Component {
    render() {
        return(
            <main>
                <Header />   
                <CVFormEditor />
            </main>
        )
    }
}

export default Main;
