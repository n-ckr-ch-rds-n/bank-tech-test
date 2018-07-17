describe("Ledger", function() {

  describe("#logTransaction", function() {

    var ledger = new Ledger();

    var transactionDouble = {
      'date': '14/01/2012',
      'amount': 100,
      'type': 'Deposit',
      'balance': 200
    }

    it("logs transactions in the transaction ledger", function() {
      ledger.logTransaction(transactionDouble)
      expect(ledger._transactions[0]['date']).toBe("14/01/2012")
      expect(ledger._transactions[0]['amount']).toBe(100)
      expect(ledger._transactions[0]['type']).toBe("Deposit")
      expect(ledger._transactions[0]['balance']).toBe(200)
    });
  })

})
