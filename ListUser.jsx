import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const url = "http://localhost:3005/users";

const ListUser = () => {
  const [users, setusers] = useState([]);

  const getUsers = async () => {
    const response = await axios.get(url);
    setusers(response.data);
  };
  useEffect(() => {
    getUsers();
  }, []);

  const deleteUser = async (id) => {
    await axios
      .delete(`http://localhost:3005/users/${id}`)
      .then((res) => console.log("Succesfully deleted"));
    getUsers();
  };

  return (
    <div>
      <Link to="addUser" className="btn btn-outline-primary">
        Add user
      </Link>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Gender</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <Link to={`edit/${user.id}`}>edit</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ListUser;