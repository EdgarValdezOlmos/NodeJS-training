const PizzaShopClass = require("./pizza-shop.js");
const DrinkMachineClass = require("./drink-machine.js");

const PizzaShop = new PizzaShopClass();
const DrinkMachine = new DrinkMachineClass();

PizzaShop.on("order", (size, topping) => {
    console.log(`Order received! Baking a ${size} pizza with ${topping}`);
    DrinkMachine.serveDrink(size);
})

PizzaShop.Order("large", "mushrooms");
PizzaShop.displayOrderNumber();