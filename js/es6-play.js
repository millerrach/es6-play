const veges = ["Kale", "Collards", "Swiss Chard", "Broccoli", "Spinach"];

let fruits = ["cherry", "strawberry", "apple", "blueberry", "clementine", "pear"];

const people = [
    {name: "Rachel", glasses: "yes"},
    {name: "Tony", glasses: "no"},
    {name: "Mike", glasses: "yes"},
    {name: "Julie", glasses: "yes"}
];

const ages = [3, 5, 10, 12, 15, 37, 38, 41, 42, 58, 67];

const groceries = [{ amount: 150 }, { amount: 220 }, { amount: 125 }, { amount: 300 }, { amount: 120 }];


// MAP ---------------------------------------------
const moreOf = veges.map((eat) => `Eat more ${eat}`);
console.log(moreOf);

const yum = fruits.map((fruit, i) =>({fruit, rating: i + 1}));
console.table(yum);

const listOfNames = people.map(peeps => `${peeps.name} , ${peeps.glasses}`);
console.log(listOfNames);


// Filter ---------------------------------------------
const adults = ages.filter((age) => age >= 18);
console.log(adults);

const glassesWearing = people.filter(eyes => eyes.glasses === "yes");
console.table(glassesWearing);

const filterGlasses = people.filter(glasses => {
    if (glasses.glasses === "yes") {
        console.log(`${glasses.name} wears glasses`);
    }
});

// Reduce ---------------------------------------------

const groceryTotal = groceries.reduce((sum, food) => sum + food.amount, 100);
console.log(groceryTotal);









