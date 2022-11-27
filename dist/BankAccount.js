export class BankAccount {
    Account_Balance = 1000;
    get AccountBalance() {
        return this.Account_Balance;
    }
    set AccountBalance(val) {
        this.Account_Balance = val;
    }
    constructor() {
        this.AccountBalance = 100;
    }
    Debit(amount) {
        let statement = "\tYou have insufficient balance!";
        if (amount > 0) {
            statement = "\tThe amount you entered is wrong!";
            if (this.Account_Balance > amount) {
                this.Account_Balance -= amount;
                statement = "\tTransaction successful! New Account balance is $" + this.Account_Balance + ".";
            }
            else {
                statement = "\tYou dont have enough money to do this transaction";
            }
        }
        return statement;
    }
    Credit(amount) {
        let statement = "\tTransaction failed!";
        if (amount > 0) {
            this.Account_Balance += amount;
            if (amount > 100) {
                this.Account_Balance--;
            }
            statement = '\tYour amount has been credited successfully! Your new account balance is $' + this.Account_Balance;
        }
        return statement;
    }
}
//# sourceMappingURL=BankAccount.js.map