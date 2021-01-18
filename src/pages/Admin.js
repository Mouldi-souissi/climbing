import React, { useContext, useEffect } from "react";
import AdminUser from "../components/AdminUser";
import { AdminContext } from "../contexts/AdminContext";

const Admin = () => {
  const { getAllUsers, users } = useContext(AdminContext);
  useEffect(() => {
    getAllUsers();
  }, [getAllUsers]);
  return (
    <div className="container-fluid" style={{ marginTop: "80px" }}>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">E-mail</th>
            <th scope="col">Status</th>
            <th scope="col"></th>
          </tr>
        </thead>
        {users.map((user) => (
          <AdminUser key={user._id} user={user} />
        ))}
      </table>
    </div>
  );
};

export default Admin;
