class Account {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
    console.log(`Balance Deposited:${amount}, New Balance:${this.#balance}`);
  }
  withdraw(amount) {
    if (amount > this.#balance) {
      console.log(
        `Insufficient Balance: ${
          this.#balance
        }, your withdraw if more than the balance${amount}`
      );
    } else {
      this.#balance -= amount;
      console.log(
        `Money Withrawn Success:${amount}, New Balance${this.#balance}`
      );
    }
  }
}

const myHdfc = new Account();
myHdfc.deposit(500);
myHdfc.withdraw(100);
