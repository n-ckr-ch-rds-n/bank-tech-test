function Account(ledger = new Ledger()) {
  this._balance = 0;
  this._ledger = ledger;
}

Account.prototype.increaseBalance = function (amount) {
  this._balance += amount;
  this.getLedger().logTransaction({
    'date': new Date().toLocaleDateString("en-GB"),
    'amount': amount,
    'type': "Deposit",
    'balance': this._balance
  })
};

Account.prototype.decreaseBalance = function (amount) {
  this._balance -= amount;
  this.getLedger().logTransaction({
    'date': new Date().toLocaleDateString("en-GB"),
    'amount': amount,
    'type': "Withdrawal",
    'balance': this._balance
  })
};

Account.prototype.getTransactions = function () {
  return this.getLedger()._transactions;
};

Account.prototype.getLedger = function () {
  return this._ledger;
};
