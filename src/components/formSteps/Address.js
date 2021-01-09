import { Component } from 'react'

import "./forms.css"

export default class Address extends Component {
  render() {
    const { data, handleChange } = this.props
    return (
      <div className="address">
        <div className="form-control">
          <input type="text" placeholder="Name..." value={data.name} onChange={(e) => handleChange("name", e)}></input>
          <input type="text" placeholder="Surname..." value={data.surname} onChange={(e) => handleChange("surname", e)}></input>
          <input type="text" placeholder="Country..." value={data.country} onChange={(e) => handleChange("country", e)}></input>
          <input type="text" placeholder="Street..." value={data.street} onChange={(e) => handleChange("street", e)}></input>
        </div>
        <button className="next" onClick={() => this.props.onChangeStep("description")}>Next</button>
      </div>
    );
  }
}