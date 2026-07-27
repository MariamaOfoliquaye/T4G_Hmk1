document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("show-info-btn");
    const message = document.getElementById("user-message");

    // A. Store your name inside a variable and log it to the console.
    const myName = "Mariam";
    console.log("Name:", myName);

    // B. Store your age inside a variable and log it to the console.
    const myAge = 25;
    console.log("Age:", myAge);

    // C. Add two numbers and store it in a variable and log it to the console.
    const addition = 15 + 10;
    console.log("Addition:", addition);

    // D. Subtract two numbers and store it in a variable and log it to the console.
    const subtraction = 20 - 8;
    console.log("Subtraction:", subtraction);

    // E. Divide two numbers and store it in a variable and log it to the console.
    const division = 24 / 6;
    console.log("Division:", division);

    // F. Multiply two numbers and store it in a variable and log it to the console.
    const multiplication = 7 * 9;
    console.log("Multiplication:", multiplication);

    // G. Find the remainder of 15%4 and store it in a variable and log it to the console.
    const remainder = 15 % 4;
    console.log("Remainder:", remainder);

    // H. Store a boolean value inside a variable and log it to the console.
    const isStudent = true;
    console.log("Boolean:", isStudent);

    // I. Set the value of a variable to number and log the type of data it is to the console.
    const numberValue = 100;
    console.log("Type of numberValue:", typeof numberValue);

    // J. Set the value of a variable to a string and log the type of data it is to the console.
    const stringValue = "Hello, JavaScript!";
    console.log("Type of stringValue:", typeof stringValue);

    if (button && message) {
        button.addEventListener("click", function () {
            const name = prompt("Please enter your name:");
            const age = prompt("Please enter your age:");
            const email = prompt("Please enter your email:");

            if (!name || !age || !email) {
                const reminder = "Please provide your name, age, and email.";
                message.textContent = reminder;
                alert(reminder);
                return;
            }

            const displayMessage = `Hi ${name}, you are ${age} years old and we'll keep in touch via your email: ${email}`;
            message.textContent = displayMessage;
            alert(displayMessage);
        });
    }
});
