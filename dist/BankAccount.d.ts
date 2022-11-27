import { IBankAccount } from "./IBankAccount.js";
export declare class BankAccount implements IBankAccount {
    private Account_Balance;
    get AccountBalance(): number;
    set AccountBalance(val: number);
    constructor();
    Debit(amount: number): string;
    Credit(amount: number): string;
}
