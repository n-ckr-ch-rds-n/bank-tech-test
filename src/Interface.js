function Interface(account = new Account(), printer = new Printer()) {
  this._account = account;
  this._printer = printer;
}

Interface.prototype.deposit = function (amount) {
  if (amount <= 0) {
    throw Error("Deposit amount must be greater than 0");
  }
  if (typeof amount != "number") {
    throw Error("Deposit amount must be a number");
  }
  this._account.increaseBalance(amount);
};

Interface.prototype.withdraw = function (amount) {
  if (this._account.balance-amount < 0) {
    throw Error("Insufficient funds")
  }
  if (typeof amount != "number") {
    throw Error("Withdrawal amount must be a number")
  }
  this._account.decreaseBalance(amount);
};

Interface.prototype.printStatement = function () {
  this._printer.getStatement(this._account.getTransactions());
};

Interface.prototype.getBalance = function () {
  return this._account.balance;
};
