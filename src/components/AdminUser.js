import React, { useContext } from "react";
import { AdminContext } from "../contexts/AdminContext";

const AdminUser = (props) => {
  const { name, email, status, _id } = props.user;
  const { blocUser } = useContext(AdminContext);
  return (
    <tbody>
      <tr>
        <td>{name}</td>
        <td>{email}</td>
        <td>{status}</td>
        <td>
          <button
            className={
              status === "active" ? "btn btn-danger" : "btn btn-secondary"
            }
            onClick={() => blocUser(_id, status)}
          >
            {status === "active" ? "Block" : "Unblock"}
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default AdminUser;
