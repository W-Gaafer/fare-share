import { useState } from "react";
import Button from "./Button";

function FormSplitBill({ selectedFriend, handleSplitBill, setSelectedFriend }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const [whoPays, setWhoPays] = useState("user");

  const paidByFriend = bill ? bill - paidByUser : "";

  function handleSubmit(e) {
    e.preventDefault();

    if (!bill || !paidByUser) return;

    let value = -paidByUser;

    if (whoPays === "user") {
      value = paidByFriend;
    }

    handleSplitBill(value);
    setSelectedFriend(null);
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>

      <label>📃 Bill value</label>
      <input value={bill} onChange={(e) => setBill(+e.target.value)} />

      <label>💰 You expense</label>
      <input
        value={paidByUser}
        onChange={(e) => setPaidByUser(+e.target.value)}
      />

      <label>💰 {selectedFriend.name} expense</label>
      <input value={paidByFriend} disabled />

      <label>💳 Bill paid by</label>
      <select value={whoPays} onChange={(e) => setWhoPays(e.target.value)}>
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}

export default FormSplitBill;
