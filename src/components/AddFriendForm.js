import { useState } from "react";
import Button from "./Button";

function FormAddFriend({ setFriends, setShowAddFriend }) {
  const [newName, setNewName] = useState("");
  const [newURL, setNewURL] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    e.preventDefault();

    if (!newName || !newURL) return;

    const id = crypto.randomUUID();

    const newFriend = {
      id,
      name: newName,
      image: `${newURL}?u=${id}`,
      balance: 0,
    };

    setFriends((friends) => [...friends, newFriend]);
    setShowAddFriend(false);
    setNewName("");
    setNewURL("https://i.pravatar.cc/48");
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>🏷️ Name</label>
      <input value={newName} onChange={(e) => setNewName(e.target.value)} />

      <label>📸 Image URL</label>
      <input value={newURL} onChange={(e) => setNewURL(e.target.value)} />

      <Button>Add</Button>
    </form>
  );
}

export default FormAddFriend;
