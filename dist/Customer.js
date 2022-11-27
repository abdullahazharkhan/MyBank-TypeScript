import { BankAccount } from "./BankAccount.js";
export class Customer extends BankAccount {
    first_name;
    last_name;
    gender;
    age;
    mobile_number;
    bank_account;
    get FirstName() {
        return this.first_name;
    }
    set FirstName(val) {
        this.first_name = val;
    }
    get LastName() {
        return this.last_name;
    }
    set LastName(val) {
        this.last_name = val;
    }
    get Gender() {
        return this.gender;
    }
    set Gender(val) {
        this.gender = val;
    }
    get Age() {
        return this.age;
    }
    set Age(val) {
        this.age = val;
    }
    get MobileNumber() {
        return this.mobile_number;
    }
    set MobileNumber(val) {
        this.mobile_number = val;
    }
    get BankAccount() {
        return this.bank_account;
    }
    set BankAccount(val) {
        this.bank_account = val;
    }
    CustomerInfo() {
        return `
                Name: ${this.FirstName} ${this.LastName} 
                Age: ${this.Age} 
                Gender: ${this.Gender}
                Mobile: ${this.MobileNumber}
        `;
    }
}
//# sourceMappingURL=Customer.js.map