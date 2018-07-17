function Printer() {}

Printer.prototype.statement = function (transactions) {
  console.log("date || credit || debit || balance");
  transactions.reverse().forEach(function(transaction) {
    if (transaction['type'] === "Deposit") {
      console.log(`${transaction['date']} || ${transaction['amount'].toFixed(2)} || || ${transaction['balance']}`);
    } else if (transaction['type'] === "Withdrawal") {
      console.log(`${transaction['date']} || || ${transaction['amount'].toFixed(2)} || ${transaction['balance']}`);
    }
  });
};
