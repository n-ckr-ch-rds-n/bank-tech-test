function Account() {
  this.balance = 0;
  this.transactions = [];
};

Account.prototype.deposit = function (amount) {
  this.balance += amount;
  this.logTransaction(new Date().toLocaleDateString("en-GB"), amount, "Deposit", this.balance)
};

Account.prototype.withdraw = function (amount) {
  this.balance -= amount;
  this.logTransaction(new Date().toLocaleDateString("en-GB"), amount, "Withdrawal", this.balance)
};

Account.prototype.logTransaction = function (date, amount, type, balance) {
  this.transactions.push([date, amount, type, balance]);
};
