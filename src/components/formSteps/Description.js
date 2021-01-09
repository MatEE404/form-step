import { Component } from 'react'

export default class Description extends Component {
  render() {
    const { data, handleChange } = this.props
    return (
      <div className="description">
        <div className="form-control">
          <textarea placeholder="Description..." value={data.description} onChange={(e) => handleChange("description", e)}></textarea>
        </div>
        <button className="next" onClick={() => this.props.onChangeStep("other")}>Next</button>
      </div>
    );
  }
}