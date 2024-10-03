const url = "https://www.thecocktaildb.com/api/json/v1/1/random.php"

async function fetchDrinkName() {
    const response = await fetch(url)
    const data = await response.json()

    const DrinkNameElement = document.querySelector(".DrinkName");
    const strDrink = data.drinks[0].strDrink
    DrinkNameElement.innerHTML += "<p>" + strDrink + "</p>";

    const InstructionsElement = document.querySelector(".Instructions");
    const strInstructions = data.drinks[0].strInstructions
    InstructionsElement.innerHTML += "<p>" + strInstructions + "</p>";

    const Ingredient1Element = document.querySelector(".Ingredient1");
    const strIngredient1 = data.drinks[0].strIngredient1
    Ingredient1Element.innerHTML += "<p>" + strIngredient1 + "</p>";

    const Ingredient2Element = document.querySelector(".Ingredient2");
    const strIngredient2 = data.drinks[0].strIngredient2
    Ingredient2Element.innerHTML += "<p>" + strIngredient2 + "</p>";

    const Ingredient3Element = document.querySelector(".Ingredient3");
    const strIngredient3 = data.drinks[0].strIngredient3
    Ingredient3Element.innerHTML += "<p>" + strIngredient3 + "</p>";

    const Ingredient4Element = document.querySelector(".Ingredient4");
    const strIngredient4 = data.drinks[0].strIngredient4
    Ingredient4Element.innerHTML += "<p>" + strIngredient4 + "</p>";

};

fetchDrinkName();

