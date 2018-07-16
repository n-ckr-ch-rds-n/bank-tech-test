describe("Account", function() {

  var account = new Account;

  describe("#deposit", function() {

    it("increases the account balance", function() {
      account.balance = 0;
      account.deposit(100);
      expect(account.balance).toBe(100);
    });

    it("writes to #logTransaction", function() {
      account.balance = 0;
      account.transactions = [];
      account.deposit(100);
      expect(account.transactions.length).toBe(1);
    })

  })

  describe("#withdraw", function() {

    it("decreases the account balance", function() {
      account.balance = 50;
      account.withdraw(50);
      expect(account.balance).toBe(0);
    });

    it("writes to #logTransaction", function() {
      account.balance = 50;
      account.transactions = [];
      account.withdraw(10);
      expect(account.transactions.length).toBe(1);
      expect(account.transactions[0][2]).toBe("Withdrawal");
    })

  })

  describe("#logTransaction", function() {

    it("logs transactions in the transaction ledger", function() {
      account.transactions = [];
      account.logTransaction("14/01/2012", 100, "Deposit")
      expect(account.transactions[0][0]).toBe("14/01/2012")
      expect(account.transactions[0][1]).toBe(100)
      expect(account.transactions[0][2]).toBe("Deposit")
    });

  })
})
