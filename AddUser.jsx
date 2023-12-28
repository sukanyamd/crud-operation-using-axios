import React, { useState } from "react";
import "../adduser.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");

  const navigate = useNavigate();

  const addUser = async (e) => {
    e.preventDefault();
    // console.log(username, email, gender);
    try {
      await axios.post("http://localhost:3005/users", {
        name,
        email,
        gender,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="box">
      <h2>Add user Form</h2>
      {/* <form onSubmit={addUser}> */}
        <div className="form-group">
          <label htmlFor="">User Name</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => {
              setname(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Email</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Gender</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => {
              setGender(e.target.value);
            }}
          />
        </div>
        <button className="btn btn-outline-primary">Submit</button>
      {/* </form> */}
    </div>
  );
};

export default AddUser;
           
              