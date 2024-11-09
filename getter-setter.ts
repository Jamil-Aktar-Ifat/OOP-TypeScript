{
  // getter & setter
  class BankAccount {
    public readonly id: number;
    public readonly name: string;
    protected _balance: number; // should put an underscore before the variable as convention

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this._balance = balance;
      this.name = name;
    }

    set deposit(amount: number){
        this._balance = this._balance+amount
    }
    // public addDeposite(amount: number) {
    //   this._balance += amount;
    // }

    //getter
    get balance() {
      return this._balance;
    }

    // public getBalance() {
    //   return this._balance;
    // }
  }

  const myAcc = new BankAccount(111, "Jamil", 80);
  //   myAcc.balance = 0;
  //   myAcc.addDeposite(50); // we need to call function
  myAcc.deposit = 50
  //   const myBalace = myAcc.getBalance(); // we need to call function
  const myBalace = myAcc.balance; // using property
  console.log(myBalace);

  //
}
