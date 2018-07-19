function Ledger() {
  this._transactions = []
}

Ledger.prototype.logTransaction = function (options) {
  this._transactions.push(options);
};

Ledger.prototype.getTransactions = function () {
  return this._transactions;
};
