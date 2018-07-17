function Interface() {
  this._account = new Account;
}

Interface.prototype.deposit = function (amount) {
  if (amount <= 0) {
    return "Error: deposit amount must be greater than 0"
  } else if (typeof amount != "number") {
    return "Error: deposit amount must be a number"
  } else {
    this._account.increaseBalance(amount);
  }
  return this._account._balance;
};

Interface.prototype.withdraw = function (amount) {
  if (this._account._balance-amount < 0) {
    return "Error: insufficient funds"
  } else {
    this._account.decreaseBalance(amount);
  }
  return this._account._balance;
};

Interface.prototype.printStatement = function () {
  this._account._printer.statement(this._account._ledger._transactions);
};
