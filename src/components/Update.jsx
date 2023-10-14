import { useLoaderData } from "react-router-dom";

const Update = () => {
  const userData = useLoaderData();
  //   console.log(userData);
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const updateData = { name: name, email: email };
    console.log(name, email);

    fetch(`http://localhost:5000/users/${userData._id}`, {
      method: "PUT",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(updateData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert("User updated successfully");
        }
      });
  };
  return (
    <div>
      <h3>update is coming soon {userData.name}</h3>

      <form onSubmit={handleUpdate}>
        <input type="text" name="name" id="name" defaultValue={userData.name} />
        <br />
        <input
          type="email"
          name="email"
          id="email"
          defaultValue={userData.email}
        />
        <br />
        <input type="submit" value="Update" />
      </form>
    </div>
  );
};

export default Update;
