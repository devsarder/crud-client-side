import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
  const loggedUsers = useLoaderData();
  const [users, setUsers] = useState(loggedUsers);

  const handleDelete = (_id) => {
    console.log("user delete id", _id);
    fetch(`http://localhost:5000/users/${_id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          const remaining = users.filter((user) => user._id !== _id);
          console.log(remaining);
          setUsers(remaining);
          alert("user deleted");
        }
        console.log(data);
      });
  };

  return (
    <div>
      <h2>All Users</h2>
      {users.map((user) => (
        <p style={{ display: "flex", FlexDirection: "column" }} key={user._id}>
          {user.name} :{user.email}
          <Link to={`/update/${user._id}`}>
            <button>Update</button>
          </Link>
          <button onClick={() => handleDelete(user._id)}>x</button>
        </p>
      ))}
    </div>
  );
};

export default Users;
