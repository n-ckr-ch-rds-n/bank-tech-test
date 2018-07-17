function Printer() {}

Printer.prototype.statement = function (transactions) {
  var statementString = this.getString(transactions);
  console.log(statementString);
};

Printer.prototype.getString = function (transactions) {
  var statementString = "date || credit || debit || balance\n";
  transactions.reverse().forEach(function(transaction) {
    if (transaction['type'] === "Deposit") {
      statementString += (`${transaction['date']} || ${transaction['amount'].toFixed(2)} || || ${transaction['balance']}\n`);
    } else if (transaction['type'] === "Withdrawal") {
      statementString += (`${transaction['date']} || || ${transaction['amount'].toFixed(2)} || ${transaction['balance']}\n`);
    }
  });
  return statementString
};
