describe("Account", function() {

  var account;
  var mockLedger;

  beforeEach(function() {
    mockLedger = { logTransaction: jasmine.createSpy('logTransaction') }
    account = new Account(mockLedger);
  })

  describe("#deposit", function() {

    it("increases the account balance", function() {
      account.increaseBalance(100);
      expect(account.balance).toBe(100);
    });

    it("writes to ledger.logTransaction", function() {
      account.increaseBalance(100);
      expect(mockLedger.logTransaction).toHaveBeenCalled();
    });

  })

  describe("#withdraw", function() {

    it("decreases the account balance", function() {
      account.increaseBalance(100);
      account.decreaseBalance(50);
      expect(account.balance).toBe(50);
    });

    it("writes to ledger.logTransaction", function() {
      account.increaseBalance(100);
      account.decreaseBalance(50);
      expect(mockLedger.logTransaction).toHaveBeenCalled();
    });

  });
});
