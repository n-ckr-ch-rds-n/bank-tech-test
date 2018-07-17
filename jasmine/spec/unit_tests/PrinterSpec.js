describe("Printer", function () {

  describe("#printStatement", function() {

    it("logs bank statement to the console", function() {
      var printer = new Printer;
      spyOn(console, 'log');
      printer.printStatement([]);
      expect(console.log).toHaveBeenCalledWith("date || credit || debit || balance");
    })

  });

});
