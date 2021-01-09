import { Component } from 'react'

export default class Other extends Component {
  render() {
    const { data } = this.props
    return (
      <div className="other">
        <div className="form-control">
          <p>Name: {data.name}</p>
          <p>Surname: {data.surname}</p>
          <p>Age: {data.age}</p>
          <p>Gender: {data.gender}</p>
          <p>Phone: {data.phone}</p>
          <p>Description: {data.description}</p>
          <p>Email: {data.email}</p>
          <p>Country: {data.country}</p>
          <p>Street: {data.street}</p>
        </div>
        <button className="next" onClick={() => console.log(data)}>Send</button>
      </div>
    );
  }
}