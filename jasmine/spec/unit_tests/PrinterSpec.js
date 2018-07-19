describe("Printer", function () {
  var printer;
  var transactionsDouble;
  var transactionsDouble2;

  beforeEach(function() {
    printer = new Printer;
    transactionsDouble1 = [{
      'date': '14/01/2012',
      'amount': 100,
      'type': 'Deposit',
      'balance': 200
    }]
    transactionsDouble2 = [{
      'date': '14/01/2012',
      'amount': 100,
      'type': 'Withdrawal',
      'balance': 200
    }]
  })

  describe("#statement", function() {

    it("calls console log", function() {
      spyOn(console, 'log');
      printer.getStatement(transactionsDouble1)
      expect(console.log).toHaveBeenCalledWith("date || credit || debit || balance\n14/01/2012 || 100.00 || || 200.00\n");
    })

  });

  describe("#getString", function() {

    it("formats transactions into a printable string", function() {
      expect(printer.getString(transactionsDouble1)).toBe("date || credit || debit || balance\n14/01/2012 || 100.00 || || 200.00\n")
    })

    it("formats transactions into a printable string", function() {
      expect(printer.getString(transactionsDouble2)).toBe("date || credit || debit || balance\n14/01/2012 || || 100.00 || 200.00\n")
    })

  });

});
