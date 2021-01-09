import { Component } from 'react'

export default class Other extends Component {
  render() {
    const { data, handleChange } = this.props
    return (
      <div className="other">
        <div className="form-control">
          <input type="text" placeholder="Age..." value={data.age} onChange={(e) => handleChange("age", e)}></input>
          <select value={data.gender} onChange={(e) => handleChange("gender", e)}>
            <option value="m">Man</option>
            <option value="w">Woman</option>
            <option value="o">Other</option>
            <option value="n">I don't want to pass</option>
          </select>
          <input type="text" placeholder="Phone..." value={data.phone} onChange={(e) => handleChange("phone", e)}></input>
          <input type="text" placeholder="Email..." value={data.email} onChange={(e) => handleChange("email", e)}></input>
        </div>
        <button className="next" onClick={() => this.props.onChangeStep("rezult")}>Next</button>
      </div>
    );
  }
}