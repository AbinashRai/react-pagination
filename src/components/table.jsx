import axios from "axios";
import React from "react";
import { useEffect } from "react";

const Table = ({ users }) => {
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/data")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <table className="table text-center">
        <thead>
          <tr>
            <th className="p-3">Id</th>
            <th className="p-3">Name</th>
            <th className="p-3">Phone</th>
            <th className="p-3">Email</th>
            <th className="p-3">Signup Date</th>
          </tr>
        </thead>
        <tbody>
          {users.map((users) => (
            <tr key={users.id}>
              <td>{users.id}</td>
              <td>{users.fullName}</td>
              <td>{users.fullMobileNumber}</td>
              <td>{users.email}</td>
              <td>{users.signupDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
