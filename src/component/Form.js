import React, { Component } from "react";

export class Form extends Component {
  state = {
    name: "",
    dept: "",
    rating: "",
    user: [],
  };

  DetailsChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  DetailsSubmit = (event) => {
    event.preventDefault();

    const tempObj = {
      name: this.state.name,
      dept: this.state.dept,
      rating: this.state.rating,
    };

    const tempArr = this.state.user;
    tempArr.push(tempObj);
    this.setState({ user: tempArr });
  };

  render() {
    console.log(this.state.user, "USER");
    return (
      <div>
        <h1>Employee's Feedback Form</h1>
        <form className="forms">
          <label htmlFor="">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={this.state.name}
            onChange={this.DetailsChange}
          />
          <br />
          <label htmlFor="">Department:</label>
          <input
            type="text"
            name="dept"
            id="dept"
            value={this.state.dept}
            onChange={this.DetailsChange}
          />
          <br />
          <label htmlFor="">Rating: </label>
          <input
            type="text"
            name="rating"
            id="rating"
            value={this.state.rating}
            onChange={this.DetailsChange}
          />
          <br />
          <button onClick={this.DetailsSubmit}>Submit</button>
        </form>
        <div className="infodisplay">
          {this.state.user.map((value) => {
            return (
              <div className="detailbox">
                Name : {value.name} | Department : {value.dept} | Rating:
                {value.rating}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Form;
