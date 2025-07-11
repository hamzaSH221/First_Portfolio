const  displayPrice = document.getElementById("displayPrice");
// size----------------------------------------------------
const small = document.getElementById("small");
small.addEventListener('change', displayingCurrentPrice);

const medium = document.getElementById("medium");
medium.addEventListener('change', displayingCurrentPrice);

const large = document.getElementById("large");
large.addEventListener('change', displayingCurrentPrice);

const extraLarge = document.getElementById("extraLarge");
extraLarge.addEventListener('change', displayingCurrentPrice);

// type---------------------------------------------------------
const smoothie = document.getElementById("smoothie");
smoothie.addEventListener('change', displayingSmoothie);

const milkshake = document.getElementById("milkshake");
milkshake.addEventListener('change', displayingMilkshake);

//smoothie options--------------------------------------------
const appleJuice = document.getElementById("appleJuice");
appleJuice.addEventListener('change', displayingSmoothie);

const orangeJuice = document.getElementById("orangeJuice");
orangeJuice.addEventListener('change', displayingSmoothie);

//milkshake options ---------------------------------------------------
const wholeMilk = document.getElementById("wholeMilk");
wholeMilk.addEventListener('change', addingMilkshakeOptionsToOrders);

const semiSkimmedMilk = document.getElementById("semiSkimmedMilk");
semiSkimmedMilk.addEventListener('change', addingMilkshakeOptionsToOrders);

const skimmedMilk = document.getElementById("skimmedMilk");
skimmedMilk.addEventListener('change', addingMilkshakeOptionsToOrders);

const soyaMilk = document.getElementById("soyaMilk");
soyaMilk.addEventListener('change', addingMilkshakeOptionsToOrders);

const oatMilk = document.getElementById("oatMilk");
oatMilk.addEventListener('change', addingMilkshakeOptionsToOrders);


// milkshake extras ------------------------------------------------------
const malt = document.getElementById("malt");
malt.addEventListener('change', addingPriceForExtras);

const marshmellows = document.getElementById("marshmellows");
marshmellows.addEventListener('change', addingPriceForExtras);

const whippedCream = document.getElementById("whippedCream");
whippedCream.addEventListener('change', addingPriceForExtras);

const baileys = document.getElementById("baileys");
baileys.addEventListener('change', addingPriceForExtras);

const flake = document.getElementById("flake");
flake.addEventListener('change', addingPriceForExtras);

// Ingredients ----------------------------------------------------------------
const bannana = document.getElementById("bannana");
bannana.addEventListener('change', addingIngredientsToOrders);

const mango = document.getElementById("mango");
mango.addEventListener('change', addingIngredientsToOrders);

const raspberries = document.getElementById("raspberries");
raspberries.addEventListener('change', addingIngredientsToOrders);

const cherries = document.getElementById("cherries");
cherries.addEventListener('change', addingIngredientsToOrders);

const passionFruit = document.getElementById("passionFruit");
passionFruit.addEventListener('change', addingIngredientsToOrders);

const chocolate = document.getElementById("chocolate");
chocolate.addEventListener('change', addingIngredientsToOrders);
// add drink button -----------------------------------------------------------
const addDrink = document.getElementById("addDrink");
addDrink.addEventListener('click', showingUserTheirOrder);

const displayOrder = document.getElementById("displayOrder");

const anotherDrink = document.getElementById("anotherDrink");
anotherDrink.addEventListener('click', addingAnotherDrink);


// variables to calculate the cost + show the user their order
let total = 0;
let size = "";
let type = "";
let displayingSmoothie2 = "";
let displayingMilkshake2 = "";
let displayingMilkshakeExtras2 = "";
let displayingIngredients2 = "";


// when the user chooses the size the price updates
function displayingCurrentPrice() {
    if (small.checked) {
        total = 2.50
        displayPrice.innerHTML = '£' + total;
        size = "small";
    } 
    else if (medium.checked) {
        total = 3.00
        displayPrice.innerHTML = '£' + total;
        size = "medium";
    }
    else if(large.checked){
        total = 3.55
        displayPrice.innerHTML = '£' + total;
        size = "large";
    }
    else if(extraLarge.checked){
        total = 4.20
        displayPrice.innerHTML = '£' + total;
        size = "extra large";
    }
}

// will display the smoothie options when smoothie is checked
function displayingSmoothie() {
    if(smoothie.checked)
    {
        document.getElementById("smoothieOptions").style.display = 'block';
        document.getElementById("milkshakeOptions").style.display = 'none'; // hides the milk bases
        document.getElementById("milkshakeExtras").style.display = 'none';  // hides the milkshake extras
        type = ", smoothie";

    }

    if(appleJuice.checked)
    {
        displayingSmoothie2 = ", apple juice";
    }
    if(orangeJuice.checked)
    {
        displayingSmoothie2 = ", orange juice";
    }

}
// will display milkshake extras once milkshake option is selected
function displayingMilkshake() {
    if(milkshake.checked)
    {
        document.getElementById("milkshakeOptions").style.display = 'block'; 
        document.getElementById("milkshakeExtras").style.display = 'block'; 
        document.getElementById("smoothieOptions").style.display = 'none'; // hides the smoothie options
        type = ", milkshake";

    }

}
// adds milkshake to the users orders 
function addingMilkshakeOptionsToOrders(){
    if(wholeMilk.checked)
    {
        displayingMilkshake2 = ", whole milk";
    }
    if(semiSkimmedMilk.checked)
    {
        displayingMilkshake2 = ", semi skimmed milk";
    }
    if(skimmedMilk.checked){
        displayingMilkshake2 = ", skimmed milk";
    }
    if(soyaMilk.checked)
    {
        displayingMilkshake2 = ", soya milk";
    }
    if(oatMilk.checked)
    {
        displayingMilkshake2 = ", oat milk"
    }

}
// adds the price to the total for the extras and also adds it to the users order
function addingPriceForExtras(){
    var selectMilkshakeExtras = [];
    if(malt.checked)
    {
        total += 0.75;
        displayPrice.innerHTML = '£' + total;
        selectMilkshakeExtras.push(", malt");
    }
    if(marshmellows.checked)
    {
        total += 0.75;
        displayPrice.innerHTML = '£' + total;
        selectMilkshakeExtras.push(", marshmellows");
    }
    if(whippedCream.checked)
    {
        total += 0.75;
        displayPrice.innerHTML = '£' + total;
        selectMilkshakeExtras.push(", whipped cream");
    }
    if(baileys.checked)
    {
        total += 0.75;
        displayPrice.innerHTML = '£' + total;
        selectMilkshakeExtras.push(", baileys");
    }
    if(flake.checked)
    {
        total += 0.75;
        displayPrice.innerHTML = '£' + total;
        selectMilkshakeExtras.push(", flake");
    }
    else{
        total -= 0.75; 
        displayPrice.innerHTML = '£' + total;
    }
    displayingMilkshakeExtras2 = selectMilkshakeExtras.join("");
}

function addingIngredientsToOrders(){
    var selectedIngredients = [];

    if (bannana.checked) {
      selectedIngredients.push(", banana");
    }
    if (mango.checked) {
      selectedIngredients.push(", mango");
    }
    if (raspberries.checked) {
      selectedIngredients.push(", raspberries");
    }
    if (cherries.checked) {
      selectedIngredients.push(", cherries");
    }
    if (passionFruit.checked) {
      selectedIngredients.push(", passion fruit");
    }
    if (chocolate.checked) {
      selectedIngredients.push(", chocolate");
    }
    
    displayingIngredients2 = selectedIngredients.join("");
    
    
    if(bannana.checked == false && mango.checked == false && raspberries.checked == false && cherries.checked == false
         && passionFruit.checked == false && chocolate.checked == false && addDrink.checked == true)
    {
        alert("Select a minimum of 1 ingredient")
    }

}

function showingUserTheirOrder(){
    if(smoothie.checked){
        displayOrder.innerHTML = size + type + displayingSmoothie2 + displayingIngredients2;
    }
    if(milkshake.checked)
    {
        displayOrder.innerHTML = size + type + displayingMilkshake2 + displayingMilkshakeExtras2 + displayingIngredients2;
    }
    alert("Your drink has been placed");
    
    
}

// fiz the function below
function addingAnotherDrink()
{
    // should reset all values once the button is clicked
    smoothie.checked.reset();
    milkshake.checked.reset();
    displayingSmoothie2.reset();
    displayingMilkshake2.reset();
    displayingMilkshakeExtras2.reset();
    displayingIngredients2.reset();

    displayPrice.innerHTML.reset();
}

displayingCurrentPrice()
