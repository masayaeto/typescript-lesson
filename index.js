var hello = "hello";
console.log(hello);
var bool = true;
var num = 10;
var str = "hello";
var person = {
    name: {
        first: "田中",
        last: "太郎"
    },
    age: 21
};
console.log(person.name.first);
var fruites = ["Apple", "Orange", "Banana"];
console.log(fruites[0]);
var list = ["Banana", 10, true];
console.log(list[2]);
var book = ["magazine", 1500, true];
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize["SHORT"] = "SHORT";
    CoffeeSize["TALL"] = "TALL";
    CoffeeSize["GRANDE"] = "GRANDE";
    CoffeeSize["VENTI"] = "VWNTI";
})(CoffeeSize || (CoffeeSize = {}));
var coffee = {
    hot: true,
    size: CoffeeSize.SHORT
};
coffee.size = CoffeeSize.TALL;
var anything = "hello";
anything = true;
anything = 10;
console.log(anything);
