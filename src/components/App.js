import { Component } from 'react';

import './App.css';
import Navigation from "./Navigation"
import Address from "./formSteps/Address"
import Description from "./formSteps/Description"
import Other from './formSteps/Other';
import Rezult from './formSteps/Rezult';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      steps: [
        { name: "address" },
        { name: "description" },
        { name: "other" },
        { name: "rezult" }
      ],
      currentStep: "address",
      name: "",
      surname: "",
      age: "",
      gender: "m",
      phone: "",
      description: "",
      email: "",
      country: "",
      street: ""
    }
  }
  renderForm(step) {
    switch (step) {
      case "address":
        return <Address
          onChangeStep={this.handleChangeCurrentStep.bind(this)}
          handleChange={this.handleChange.bind(this)}
          data={this.state} />

      case "description":
        return <Description
          onChangeStep={this.handleChangeCurrentStep.bind(this)}
          handleChange={this.handleChange.bind(this)}
          data={this.state} />

      case "other":
        return <Other
          onChangeStep={this.handleChangeCurrentStep.bind(this)}
          handleChange={this.handleChange.bind(this)}
          data={this.state} />

      case "rezult":
        return <Rezult
          onChangeStep={this.handleChangeCurrentStep.bind(this)}
          data={this.state} />

      default:
        return ""
    }
  }
  handleChangeCurrentStep(step) {
    this.setState({ currentStep: step })
  }
  handleChange(name, e) {
    this.setState({ [name]: e.target.value });
  }
  render() {
    return (
      <div className="App">
        <Navigation
          steps={this.state.steps}
          currentStep={this.state.currentStep}
          onChangeStep={this.handleChangeCurrentStep.bind(this)}></Navigation>
        <div className="form">
          <h1 className="title">{this.state.currentStep}</h1>
          <div className="card">
            {this.renderForm(this.state.currentStep)}
          </div>
        </div>
      </div>
    );
  }
}
