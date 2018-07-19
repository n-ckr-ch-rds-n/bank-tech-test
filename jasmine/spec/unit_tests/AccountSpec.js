describe("Account", function() {

  var account;

  beforeEach(function() {
    account = new Account();
  })

  describe("#deposit", function() {

    it("increases the account balance", function() {
      account.increaseBalance(100);
      expect(account._balance).toBe(100);
    });

    it("writes to ledger.logTransaction", function() {
      spyOn(account.getLedger(), 'logTransaction')
      account.increaseBalance(100);
      expect(account.getLedger().logTransaction).toHaveBeenCalled();
    });

  })

  describe("#withdraw", function() {

    it("decreases the account balance", function() {
      account.increaseBalance(100);
      account.decreaseBalance(50);
      expect(account._balance).toBe(50);
    });

    it("writes to ledger.logTransaction", function() {
      spyOn(account.getLedger(), 'logTransaction')
      account.increaseBalance(100);
      account.decreaseBalance(50);
      expect(account.getLedger().logTransaction).toHaveBeenCalled();
    });

  });
});
