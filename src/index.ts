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

  public static schema() {
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
}

function invokeBaseOperations(id: string, amount:number, BaseClass:IBaseClassBuilder<IBase>)) : IBase {
  const baseClassObject:IBase = BaseClass.new();

  baseClassObject.id = id;
  baseClassObject.amount = amount;

  return baseClassObject;
}

const bank = invokeBaseOperations("1234", 100000, Bank);
const card = invokeBaseOperations("ABCD", 300000, Card);

console.log(bank);
console.log(card);
