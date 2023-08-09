import axios from "axios";
import React, { useState, useEffect } from "react";

const Table = ({ users }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/data/users")
      .then((res) => {
        setData(res.data.users);
        setLoading(false); // Set loading to false after successful fetch
      })
      .catch((err) => {
        console.log(err);
        setLoading(false); // Set loading to false in case of an error
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!Array.isArray(data)) {
    return <div>Data is not in the expected format.</div>;
  }
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
          {users.map((user) => {
            return (
              <tr key={user.id}>
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
