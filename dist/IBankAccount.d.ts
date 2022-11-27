export interface IBankAccount {
    Debit(d: number): string;
    Credit(d: number): string;
}
