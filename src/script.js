document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("show-info-btn");
    const message = document.getElementById("user-message");

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
