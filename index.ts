let hello: string = "hello";
console.log(hello);

let bool: boolean = true;
let num: number = 10;
let str: string = "hello"

let person = {
  name: {
    first: "田中",
    last: "太郎"
  },
  age: 21
}

console.log(person.name.first);

const fruites: string[] = ["Apple", "Orange", "Banana"];
console.log(fruites[0]);

const list: any[] = ["Banana", 10, true];
console.log(list[2]);

const book: [string, number, boolean] = ["magazine", 1500, true]; 

enum CoffeeSize {
  SHORT = "SHORT",
  TALL = "TALL",
  GRANDE = "GRANDE",
  VENTI = "VWNTI"
}

const coffee = {
  hot: true,
  size: CoffeeSize.SHORT
}

coffee.size = CoffeeSize.TALL;

let anything: any = "hello"

anything = true;
anything = 10

console.log(anything);

let unionType:number | string = 10;
let unionTypes: (number | string)[] = [10, "hello"];

function add(num1: number, num2: number): number {
  return num1 + num2;
}

add(10, 20);