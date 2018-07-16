describe("Account", function() {

  describe("#deposit", function() {

    it("increases the account balance", function() {
      var account = new Account;
      account.deposit(100);
      expect(account.balance).toBe(100);
    })

  })
})
