describe ("User makes deposit", function () {
  var interface;

  beforeEach(function() {
    interface = new Interface();
  })

  it('user prints statement with no transaction history', function() {
    spyOn(console, 'log');
    interface.printStatement();
    expect(console.log).toHaveBeenCalledWith("date || credit || debit || balance");
  });

})
