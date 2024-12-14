import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

const Users = () => {
  const loaddedData = useLoaderData();
  const [users, setUsers] = useState(loaddedData);
  //   console.log(users);

  const handleDeleteUser = (_id) => {
    console.log(_id);
    fetch(`https://coffee-store-server-sand-xi.vercel.app/users/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
          }).then((result) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remining = users.filter((user) => user._id != _id);
              setUsers(remining);
            }
          });
        }
      });
  };
  return (
    <div>
      <h1>Users Data {users.length}</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>CreationTime</th>
              <th>Last SignIn time</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <th>1</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.createdAt}</td>
                <td>{user.lastSignInTime}</td>
                <td>
                  <button className="btn">E</button>
                  <button
                    onClick={() => handleDeleteUser(user._id)}
                    className="btn"
                  >
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
