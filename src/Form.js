import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      pswd: "",
      isSubmited: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleSubmit(event) {
    //alert("1");
    event.preventDefault();
    this.props.dispatch({ type: "SUBMIT", payload: this.state });
    this.setState({
      email: "",
      pswd: "",
      isSubmited: true
    });
  }
  render() {
    if (this.state.isSubmited) {
      return <Redirect to={"/show"} />;
    }

    return (
      <div className="container">
        <h2>Sample form</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="pwd">Password:</label>
            <input
              type="password"
              className="form-control"
              id="pwd"
              placeholder="Enter password"
              name="pswd"
              value={this.state.pswd}
              onChange={this.handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default connect(null)(Form);
