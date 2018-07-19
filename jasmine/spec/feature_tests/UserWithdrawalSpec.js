describe ("User makes withdrawal", function () {
  var interface;

  beforeEach(function() {
    interface = new Interface();
  })

  it('user withdraws 50 pounds', function() {
    interface.deposit(100);
    expect(interface.withdraw(50)).toBe(50)
  });

  it('user attempts to more money than he/she has', function() {
    expect(function() { interface.withdraw(50) }).toThrow(Error("Insufficient funds"))
  });

  it('user attempts to withdraw cat', function() {
    expect(function() { interface.withdraw('cat') }).toThrow(Error("Withdrawal amount must be a number"))
  });

})
