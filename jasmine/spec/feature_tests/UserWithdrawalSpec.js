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
    expect(interface.withdraw(50)).toBe("Error: insufficient funds")
  });

  it('user attempts to withdraw cat', function() {
    expect(interface.withdraw('cat')).toBe("Error: withdrawal amount must be a number")
  });

})
