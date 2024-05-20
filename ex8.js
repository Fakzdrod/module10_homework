let drinks = new Map();
drinks.set("cola", "black");
drinks.set("fanta", "orange");
drinks.set("mountain dew", "green");
drinks.set("sprite", "sprite");

for (let elem of drinks.keys())
{
    console.log(elem + " is " + drinks.get(elem));
}