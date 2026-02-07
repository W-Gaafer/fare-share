function Footer({ friends }) {
  let totalOwed = 0;
  let totalOwing = 0;

  friends.forEach((friend) => {
    if (friend.balance < 0) {
      totalOwed += Math.abs(friend.balance);
    }

    if (friend.balance > 0) {
      totalOwing += friend.balance;
    }
  });

  return (
    <footer className="footer">
      <p className="red">💸 إجمالي المديونية: {totalOwed}$</p>

      <p className="green">💰 إجمالي الديون المستحقة لك: {totalOwing}$</p>
    </footer>
  );
}

export default Footer;
