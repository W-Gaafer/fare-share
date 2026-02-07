import Friend from "./Friend";

function FriendsList({ friends, handleSelectedFriend, selectedFriend }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          key={friend.id}
          friend={friend}
          handleSelectedFriend={handleSelectedFriend}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
}

export default FriendsList;
