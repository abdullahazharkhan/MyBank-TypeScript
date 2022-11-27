import { BankAccount } from "./BankAccount.js";

export class Customer extends BankAccount {
    public first_name: string;
    public last_name: string;
    public gender: "Male" | "Female";
    public age: number;
    public mobile_number: number;
    public bank_account: BankAccount;

    get FirstName() {
        return this.first_name;
    }
    set FirstName(val: string) {
        this.first_name = val;
    }

    get LastName() {
        return this.last_name;
    }
    set LastName(val: string) {
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
    set Age(val: number) {
        this.age = val;
    }

    get MobileNumber() {
        return this.mobile_number;
    }
    set MobileNumber(val: number) {
        this.mobile_number = val;
    }

    get BankAccount() {
        return this.bank_account;
    }
    set BankAccount(val: BankAccount) {
        this.bank_account = val;
    }

    public CustomerInfo(): string {
        return `
                Name: ${this.FirstName} ${this.LastName} 
                Age: ${this.Age} 
                Gender: ${this.Gender}
                Mobile: ${this.MobileNumber}
        `
    }
}