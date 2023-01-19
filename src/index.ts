interface IBase {
  id: string,
  amount: number
}

interface IBaseClassBuilder<T extends IBase> {
  new(): T,
  schema(): object
}

class Bank implements IBase {
  id:string;
  amount:number;
  
  address: string;

  constructor() {
    this.id = "BBBB";
    this.amount = 33333;
    this.address = "IND";
  }

  public static schema() : object {
    return {};
  }
}

class Card implements IBase {
  id: string;
  amount: number;

  expiry:number;

  constructor() {
    this.id = "CCCC";
    this.amount = 44444;
    this.expiry = 20;
  }

  public static schema() : object {
    return {};
  }
}

const invokeBaseOperations : (id: string,
                              amount:number,
                              baseClassObject:IBase,
                              BaseClass:IBaseClassBuilder<IBase>
                             ) => IBase = function(id, amount, baseClassObject, BaseClass) {
  baseClassObject.id = id;
  baseClassObject.amount = amount;

  return baseClassObject;
};

const bank : Bank = new Bank();
console.log("After constructor: ", bank);
invokeBaseOperations("1234", 100000, bank, Bank);
console.log("After base operations: ", bank);

const card : Card = new Card();
console.log("\nAfter constructor: ", card);
invokeBaseOperations("ABCD", 300000, card, Card);
console.log("After base operations: ", card);

card.expiry = 30;

console.log("After custom expiry: ", card);
