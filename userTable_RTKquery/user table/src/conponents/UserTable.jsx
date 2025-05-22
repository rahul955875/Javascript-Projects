import React, { useState } from "react";
import {
  useDeleteUserMutation,
  useGetAllUserQuery,
} from "../features/fetchUser";
import AddUser from "./AddUser";

const UserTable = () => {
  const [input, setInput] = useState("");
  const [isId, setIsId] = useState(null);
  const { data, isLoading, error } = useGetAllUserQuery();
  const [deleteUser] = useDeleteUserMutation();
  // console.log(data,isLoading,error)
  //   console.log(error);
  const handleEdit = (user) => {
    setIsId(user.id);
    setInput(user.name);
  };

  if (error) {
    return (
      <tr>
        <td colSpan={3} className="display-4">
          somthing went wrong!!!
        </td>
      </tr>
    );
  }
  return (
    <>
      <AddUser isId={isId} setIsId={setIsId} textfield={[input, setInput]} />
      <h2>UserTable</h2>
      <table className="table">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <tr>
              <td colSpan={3} className="display-4">
                Loading...
              </td>
            </tr>
          ) : (
            data.map((user) => (
              <tr key={user.id}>
                <td>
                  {user.id.length > 5 ? user.id.slice(0, 5) + "..." : user.id}
                </td>
                <td>{user.name}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteUser(user.id)}
                  >
                    delete
                  </button>
                  <button
                    className="btn btn-warning"
                    onClick={() => handleEdit(user)}
                  >
                    edit
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </>
  );
};

export default UserTable;
