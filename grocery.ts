  
class Grocery {
    name: string;
    quantity: number;

    constructor(name: string, quantity: number){
        this.name = name;
        this.quantity = quantity; 
    }
}

var apples = new Grocery("Mangoes", 100);
var grapes = new Grocery("Lemon", 200);
var bananas = new Grocery("bananas", 420);

var groceries:Grocery[];
groceries = [apples, grapes, bananas];

for (var i = 0; i < groceries.length; i++) {
    document.write(groceries[i].name);
    document.write("<br>");
}