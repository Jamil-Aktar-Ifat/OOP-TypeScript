{
  // access modifiers
  class BankAccount {
    public readonly id: number;
    public readonly name: string;
    protected _balance: number; // should put an underscore before the variable as convention

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this._balance = balance;
      this.name = name;
    }

    public addDeposite(amount: number) {
      this._balance += amount;
    }

    public getBalance() {
      return this._balance;
    }
  }

  class StudentAccount extends BankAccount {
    test() {
      this._balance;
    }
  }

  const myAcc = new BankAccount(111, "Jamil", 20);
  myAcc.addDeposite(50);
  const myBalace = myAcc.getBalance();
  console.log(myBalace);

  //
}
