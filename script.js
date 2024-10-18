function result() {
    let favoriteSnack = prompt(`What is your favorite snack?`);
    let currentAge = parseInt(prompt(`What is your current age?`));
    let maxAge = parseInt(prompt(`What age do you expect to live to?`));
    let amountPerDay = parseInt(prompt("How many of your favorite snacks do you eat per day?"));
    let rest = (maxAge - currentAge) * 365 * amountPerDay;
    let message = document.getElementById("message");
    let error = document.getElementById("error");

    if (isNaN(currentAge) || isNaN(maxAge) || isNaN(amountPerDay)){
        error.textContent = `Please enter valid numbers for age and amount per day!`;
    } else{
        message.textContent = `You will need ${rest} ${favoriteSnack}s to last you until the ripe old age of ${maxAge}.`;
    }
}