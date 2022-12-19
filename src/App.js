import { Component } from "react";
import Main from "./components/Main";

class App extends Component {
  render() {
    return (
      <div>
        <Main />
      </div>
    );
  } 
}

export default App;

// * What is the problem?
// - Write a program that takes user's input & generate a CV which can be downloaded as a PDf file.

// * What interface do we need?
// - Input page
// - Preview & Download page

// * What functionality do we need?
// - Get data
// - Validate data
// - Store Data
// - Generate CV preview
// - Generate PDF
// - Autofill input as an example