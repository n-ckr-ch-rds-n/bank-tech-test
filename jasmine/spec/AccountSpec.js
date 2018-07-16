describe("Account", function() {

  var account = new Account;

  describe("#deposit", function() {

    it("increases the account balance", function() {
      account.deposit(100);
      expect(account.balance).toBe(100);
    });

  })

  describe("#logTransaction", function() {

    it("logs transactions in the transaction ledger", function() {
      account.logTransaction("14/01/2012", 100, "Deposit")
      expect(account.transactions[0][0]).toBe("14/01/2012")
      expect(account.transactions[0][1]).toBe(100)
      expect(account.transactions[0][2]).toBe("Deposit")
    });

  })
})
