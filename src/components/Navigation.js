import { Component } from 'react'

import "./Navigation.css"

export default class Navigation extends Component {
  render() {
    return (
      <div className="navigation">
        {
          this.props.steps.map(({ name }, index) => (
            <div
              className={`item ${this.props.currentStep === name ? "active" : ""}`}
              key={name} onClick={(e) => this.props.onChangeStep(name)}>
              <h1>{index + 1}</h1>
              <p>{name}</p>
            </div>
          ))
        }
      </div>
    );
  }
}