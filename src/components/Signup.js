import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class SignUp extends Component {
  render() {
    return (
      <div
        className="container card"
        style={{
          padding: "15px 15px 15px 15px",
          borderRadius: "15px",
          width: "25rem",
          backgroundColor: "lightgray",
        }}>
        <form>
          <h3>Sign Up</h3>

          <div className="form-group pt-2">
            <label>First name</label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
            />
          </div>

          <div className="form-group pt-2">
            <label>Last name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
            />
          </div>

          <div className="form-group pt-2">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
            />
          </div>

          <div className="form-group pt-2">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
            />
          </div>

          <button type="submit" className="btn btn-primary btn-block mt-2">
            Sign Up
          </button>
          <p className="forgot-password text-right pt-2">
            Already registered <Link to="/login">Sign In?</Link>
          </p>
        </form>
      </div>
    );
  }
}
