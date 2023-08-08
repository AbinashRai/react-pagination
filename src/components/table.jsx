import axios from "axios";
import React, { useState, useEffect } from "react";

const Table = ({ users }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/data")
      .then((res) => setData(res.data))
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
          {data.map((user, index) => {
            return (
              <tr key={index}>
                <td>{user.id}</td>
                <td>{user.fullName}</td>
                <td>{user.fullMobileNumber}</td>
                <td>{user.email}</td>
                <td>{user.signupDate}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
