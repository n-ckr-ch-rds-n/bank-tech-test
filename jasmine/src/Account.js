function Account() {
  this.balance = 0;
  this.transactions = [];
};

Account.prototype.deposit = function (amount) {
  this.balance += amount;
  this.logTransaction(new Date().toLocaleDateString("en-GB"), amount, "Deposit")
};

Account.prototype.withdraw = function (amount) {
  this.balance -= amount;
  this.logTransaction(new Date().toLocaleDateString("en-GB"), amount, "Withdrawal")
};

Account.prototype.logTransaction = function (date, amount, type) {
  this.transactions.push([date, amount, type]);
};
