function Account() {
  this.balance = 0;
  this.transactions = [];
};

Account.prototype.deposit = function (amount) {
  this.balance += amount;
};

Account.prototype.logTransaction = function (date, amount, type) {
  this.transactions.push([date, amount, type]);
};
