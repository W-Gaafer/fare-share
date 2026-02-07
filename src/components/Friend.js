import Button from "./Button";

function Friend({ friend, handleSelectedFriend, selectedFriend }) {
  const isSelected = selectedFriend && friend.id === selectedFriend.id;

  let colorStyle = { color: "black" };
  let message = `You and ${friend.name} are even`;

  if (friend.balance < 0) {
    colorStyle = { color: "red" };
    message = `You owe ${friend.name} ${-friend.balance}$`;
  }

  if (friend.balance > 0) {
    colorStyle = { color: "green" };
    message = `${friend.name} owes You ${friend.balance}$`;
  }

  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      <p style={colorStyle}>{message}</p>
      <Button clickFunction={() => handleSelectedFriend(friend)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
}

export default Friend;
