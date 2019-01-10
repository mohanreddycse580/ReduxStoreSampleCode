import React from "react";
import { connect } from "react-redux";

class Show extends React.Component {
  render() {
    return (
      <div className="container">
        <h1> Display Store Data</h1>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Email</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{this.props.email} </td>
              <td>{this.props.pswd}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    email: state.email,
    pswd: state.pswd
  };
}

export default connect(mapStateToProps)(Show);
