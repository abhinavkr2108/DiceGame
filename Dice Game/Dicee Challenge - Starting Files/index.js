// Generate a random number between 1 and 6
let randomNumber1 = Math.floor(Math.random()*6)+1;
console.log(randomNumber1)

// Get Names of dice images : dice1.png,dice2.png....
// Append folder name to dice image name
let randomDiceImage = "dice" + randomNumber1 + ".png";
let diceImageSource = "./images/" + randomDiceImage;

// Get all class names with <img> tag and change the image source using set attribute function
let image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", diceImageSource);

let randomNumber2 = Math.floor(Math.random()*6)+1;
let secondImageSource = "./images/" + "dice" + randomNumber2 + ".png"

let image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", secondImageSource);

// Check Condition which player won
if(randomNumber1> randomNumber2){
    document.querySelector("h1").innerHTML= "Player 1 Won"
}
else if( randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML= "Player 2 Won"
}
else{
    document.querySelector("h1").innerHTML= "Its a draw"
}