function Account() {
  this.balance = 0;
};

Account.prototype.deposit = function (amount) {
  this.balance += amount;
};
