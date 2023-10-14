import "./App.css";

function App() {
  const handleAddUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const User = { name: name, email: email };
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(User),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("user added successfully");
        }
        console.log(data);
        console.log(User);
        form.reset();
      });
  };
  return (
    <>
      <h1>Exploring MongoDb CRUD</h1>

      <form onSubmit={handleAddUser}>
        <input type="text" name="name" id="name" />
        <br />
        <input type="email" name="email" id="email" /> <br />
        <input type="submit" value="Add User" />
      </form>
    </>
  );
}

export default App;
