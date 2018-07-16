function Printer() {}

Printer.prototype.printStatement = function (transactions) {
  console.log("date || credit || debit || balance");
  transactions.reverse().forEach(function(transaction) {
    if (transaction[2] === "Deposit") {
      console.log(`${transaction[0]} || ${transaction[1]} || || ${transaction[3]}`);
    } else if (transaction[2] === "Withdrawal") {
      console.log(`${transaction[0]} || || ${transaction[1]} || ${transaction[3]}`);
    }
  });
};
