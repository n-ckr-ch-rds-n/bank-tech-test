function Account(ledger = new Ledger()) {
  this.balance = 0;
  this._ledger = ledger;
}

Account.prototype.increaseBalance = function (amount) {
  this.balance += amount;
  this._ledger.logTransaction({
    'date': new Date().toLocaleDateString("en-GB"),
    'amount': amount,
    'type': "Deposit",
    'balance': this.balance
  })
};

Account.prototype.decreaseBalance = function (amount) {
  this.balance -= amount;
  this._ledger.logTransaction({
    'date': new Date().toLocaleDateString("en-GB"),
    'amount': amount,
    'type': "Withdrawal",
    'balance': this.balance
  })
};

Account.prototype.getTransactions = function () {
  return this._ledger.getTransactions();
};
