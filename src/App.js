import { useState } from "react";
import "./App.css";

import initialFriends from "./initialFriendsData";
import FriendsList from "./components/FriendList";
import FormAddFriend from "./components/AddFriendForm";
import FormSplitBill from "./components/BillSplitForm";
import Button from "./components/Button";
import Footer from "./components/Footer";

function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleSelectedFriend(friend) {
    if (selectedFriend && selectedFriend.id === friend.id) {
      setSelectedFriend(null);
      return;
    }

    setSelectedFriend(friend);
    setShowAddFriend(false);
  }

  function handleSplitBill(value) {
    setFriends((friends) =>
      friends.map((friend) => {
        if (friend.id === selectedFriend.id) {
          return { ...friend, balance: friend.balance + value };
        }
        return friend;
      }),
    );
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          handleSelectedFriend={handleSelectedFriend}
          selectedFriend={selectedFriend}
        />

        {showAddFriend && (
          <FormAddFriend
            setFriends={setFriends}
            setShowAddFriend={setShowAddFriend}
          />
        )}

        <Button clickFunction={() => setShowAddFriend((s) => !s)}>
          {showAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>

      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          handleSplitBill={handleSplitBill}
          setSelectedFriend={setSelectedFriend}
        />
      )}
    </div>
  );
}

export default App;
