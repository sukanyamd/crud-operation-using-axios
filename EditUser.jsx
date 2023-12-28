import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const [name, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getUserById(id);
  }, []);

  const getUserById = async (id) => {
    const res = await axios.get(`http://localhost:3005/users/${id}`);
    setUsername(res.data.name);
    setEmail(res.data.email);
    setGender(res.data.gender);
  };

  const updateUser = async (e) => {
    e.preventDefault();
    // console.log(username, email, gender);
    try {
      await axios.patch(`http://localhost:3005/users/${id}`, {
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
      <h2>Edit User Form</h2>
      <form onSubmit={updateUser}>
        <div className="form-group">
          <label htmlFor="">User Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Email</label>
          <input
            type="text"
            className="form-control"
            value={email}
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
            value={gender}
            onChange={(e) => {
              setGender(e.target.value);
            }}
          />
        </div>
        <button className="btn btn-outline-primary">Submit</button>
      </form>
    </div>
  );
};

export default Edit;