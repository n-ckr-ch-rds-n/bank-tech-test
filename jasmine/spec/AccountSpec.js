describe("Account", function() {

  describe("#deposit", function() {

    var account = new Account;

    it("increases the account balance", function() {
      account.deposit(100);
      expect(account.balance).toBe(100);
    });

  })
})
