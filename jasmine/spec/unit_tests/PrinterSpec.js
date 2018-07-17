describe("Printer", function () {
  var printer;
  var transactionsDouble;

  beforeEach(function() {
    printer = new Printer;
    transactionsDouble = [{
      'date': '14/01/2012',
      'amount': 100,
      'type': 'Deposit',
      'balance': 200
    }]
  })

  describe("#statement", function() {

    it("calls console log", function() {
      spyOn(console, 'log');
      printer.statement(transactionsDouble)
      expect(console.log).toHaveBeenCalledWith("date || credit || debit || balance\n14/01/2012 || 100.00 || || 200.00\n");
    })

  });

  describe("#getString", function() {

    it("formats transactions into a printable string", function() {
      expect(printer.getString(transactionsDouble)).toBe("date || credit || debit || balance\n14/01/2012 || 100.00 || || 200.00\n")
    })

  });

});
