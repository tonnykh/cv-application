import { Component } from "react";
import Main from "./components/Main";

class App extends Component {
  render() {
    return (
        <Main />
    );
  } 
}

export default App;

// * What is the problem?
// - Write a program that takes user's input, realtime render Preview while typing & can be downloaded as a PDf file or it can Print it.

// * What interface do we need?
// - Input page
// - Preview & Download page

// * What functionality do we need?
// - eventlistener input and render out realtime
// - when it delete it should delete on the preview page too
// - when press "new" Button, create new section below
// - generate PDF
// - print out 
// - autofill input as an example
