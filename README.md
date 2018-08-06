Bank Tech Test
==============

Practice tech test completed in JavaScript in week 10 of the Makers Academy coding bootcamp course. The app is a simple banking app that allows users to make deposits and withdrawals and to print a bank statement with the date of each transaction on it. 
Though the app is simple, the code has been written to embody best programming practices. It is fully tested and tests were used to drive development (TDD), the single responsibility principle is followed to the letter, dependency injection is used to isolate classes from each other, and classes are isolated from each other in the tests using mocks and spies. The code is easy to read and easy to change.

This app satisfies the following requirements:

 * You can interact with the code via the JavaScript console.
 * Sums can be deposited and withdrawn.
 * Account statements (date, amount, balance) can be printed.
 * Data is kept in memory (without being stored to a database or anything).

 And satisfies the acceptance criteria:

 **Given** a client makes a deposit of 1000 on 10-01-2012  
**And** a deposit of 2000 on 13-01-2012  
**And** a withdrawal of 500 on 14-01-2012  
**When** she prints her bank statement  
**Then** she would see

```
date || credit || debit || balance
14/01/2012 || || 500.00 || 2500.00
13/01/2012 || 2000.00 || || 3000.00
10/01/2012 || 1000.00 || || 1000.00
```

## Installation

Clone the repo, open index.html, open the console and you're away.

## Tests

The tests are written in Jasmine. Linting reporting is provided by ESlint. Test coverage is reported using Karma. Tun `npm install` and open the Jasmine SpecRunner to see the tests. Coverage reports are produced in the 'coverage' folder. 
