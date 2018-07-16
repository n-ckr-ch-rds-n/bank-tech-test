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

Account.prototype.printStatement = function () {
  console.log("date || credit || debit || balance");
  var transactions = this.transactions.reverse();
  transactions.forEach(function(transaction) {
    if (transaction[2] === "Deposit") {
      console.log(`${transaction[0]} || ${transaction[1]} || || ${transaction[3]}`);
    } else if (transaction[2] === "Withdrawal") {
      console.log(`${transaction[0]} || || ${transaction[1]} || ${transaction[3]}`);
    }
  });
};
