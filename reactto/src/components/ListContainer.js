import React from "react";
import List from "./List";

const ListContainer = () => {
  const [name,setName] = React.useState("");
  const [user, setUser] = React.useState([]);
  
const addUser = () => {
    setUser([...user,{name}]);
    setName("");
}
  const handleDelete = (index) => {
    const newUser = [...user];
    newUser.splice(index, 1);
    setUser(newUser);
  }
  const handleEdit = (index) => {
    setName([...user[index].name,{name}]);
    setUser(user);
  }
  return (
    <div>
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
    

      />
      <button onClick={addUser}>Add User</button>
      <List user={user} name={name} handleDelete={handleDelete} handleEdit={handleEdit} />
    </div>
  );
};

export default ListContainer;
