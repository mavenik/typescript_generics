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
                              BaseClass:IBaseClassBuilder<IBase>
                             ) => IBase = function(id, amount, BaseClass) {
  const baseClassObject:IBase = new BaseClass();
  console.log("After constructor: ", baseClassObject);

  baseClassObject.id = id;
  baseClassObject.amount = amount;

  return baseClassObject;
};

const bank = invokeBaseOperations("1234", 100000, Bank);
const card = invokeBaseOperations("ABCD", 300000, Card);

console.log("After base operations: ", bank);
console.log("After base operations: ", card);
