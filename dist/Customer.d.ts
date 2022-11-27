import { BankAccount } from "./BankAccount.js";
export declare class Customer extends BankAccount {
    first_name: string;
    last_name: string;
    gender: "Male" | "Female";
    age: number;
    mobile_number: number;
    bank_account: BankAccount;
    get FirstName(): string;
    set FirstName(val: string);
    get LastName(): string;
    set LastName(val: string);
    get Gender(): "Male" | "Female";
    set Gender(val: "Male" | "Female");
    get Age(): number;
    set Age(val: number);
    get MobileNumber(): number;
    set MobileNumber(val: number);
    get BankAccount(): BankAccount;
    set BankAccount(val: BankAccount);
    CustomerInfo(): string;
}
