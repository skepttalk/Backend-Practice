// BankAccount class represents a real bank account
class BankAccount {
  constructor(holderName) {
    // Account holder ka naam
    this.holderName = holderName;

    // All transactions ka record
    this.transactions = [];

    // Final balance (derived state)
    this.balance = 0;
  }

  // ---------------------------
  // METHOD: addTransaction
  // ---------------------------
  // Deposit ya withdraw add karta hai
  addTransaction(amount) {
    // Transaction ko list me add karo
    this.transactions.push(amount);

    // Balance automatically recalculate karo
    this.calculateBalance();
  }

  // ---------------------------
  // METHOD: calculateBalance
  // ---------------------------
  // Sab transactions ko jod ke final balance banata hai
  calculateBalance() {
    this.balance = this.transactions.reduce(
      (total, amount) => total + amount,
      0
    );
  }

  // ---------------------------
  // METHOD: showAccount
  // ---------------------------
  showAccount() {
    console.log("Account Holder:", this.holderName);
    console.log("Transactions:", this.transactions);
    console.log("Final Balance:", this.balance);
    console.log("---------------------------");
  }
}






const account = new BankAccount("Kuldeep");

account.addTransaction(5000);   // deposit
account.addTransaction(-2000);  // withdraw
account.addTransaction(3000);   // deposit

account.showAccount();
