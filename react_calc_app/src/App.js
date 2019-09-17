import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./App.css";
import ResultComponent from './components/ResultComponent';
import KeyPadComponent from "./components/KeyPadComponent";

class App extends Component{
    constructor(){
        super();

        this.state = {
            result: ""
        }
    }

    render(){
        return(
        <div className="App">
            <ResultComponent result={this.state.result}/><br /><br />
            <KeyPadComponent onClick={this.onClick}/>
        </div>
        );
    }
}

export default hot(module)(App);