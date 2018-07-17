function Ledger() {
  this._transactions = []
}

Ledger.prototype.logTransaction = function (options) {
  this._transactions.push(options);
};
