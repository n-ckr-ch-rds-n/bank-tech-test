describe ("User makes deposit", function () {
  var interface;

  beforeEach(function() {
    interface = new Interface();
  })

  it('user deposits 100 pounds', function() {
    expect(interface.deposit(100)).toBe(100)
  });

  it('user attempts to deposit -100 pounds', function() {
    expect(function() { interface.deposit(-100) }).toThrow(Error("Deposit amount must be greater than 0"));
  });

  it('user attempts to deposit cat', function() {
    expect(function() { interface.deposit('cat') }).toThrow(Error("Deposit amount must be a number"));
  });

})
