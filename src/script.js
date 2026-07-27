// ============================================================
//  T4G_Hmk1  –  Age‑based alert logic
//  Conditions from the provided table:
//    1.  < 12   → too young to register
//    2.  12–18  → limited options
//    3.  ≥ 18   → full access
// ============================================================

(function() {

    // ----- DOM refs -----
    const form = document.getElementById('registerForm');
    const usernameInput = document.getElementById('username');
    const ageInput = document.getElementById('age');
    const emailInput = document.getElementById('email');
    const alertBox = document.getElementById('alertBox');
    const alertMessage = document.getElementById('alertMessage');

    // ----- helper: build the alert string -----
    function buildAlert(username, age, email, condition) {
        const safeName = username.trim() || 'Guest';
        const safeEmail = email.trim() || 'no-email-provided';

        let message = '';

        switch (condition) {
            case 'too-young':
                message =
                    `Hi <span class="highlight">${safeName}</span>, you are <span class="highlight">${age}</span> years old and you are <strong>too young to register</strong>. Sorry 😢😢`;
                break;

            case 'limited':
                message =
                    `Hi <span class="highlight">${safeName}</span>, you are <span class="highlight">${age}</span> years old and you have <strong>limited options</strong> to register for. We will keep in touch via your email: <span class="highlight">${safeEmail}</span> 😢😢`;
                break;

            case 'full':
                message =
                    `Hi <span class="highlight">${safeName}</span>, you are <span class="highlight">${age}</span> years old and you can register for <strong>any option</strong> of your choosing. We will keep in touch via your email: <span class="highlight">${safeEmail}</span> 😢😢`;
                break;

            default:
                message = 'Something went wrong. Please try again.';
        }

        return message;
    }

    // ----- determine condition based on age -----
    function getCondition(age) {
        if (age < 12) return 'too-young';
        if (age >= 12 && age <= 18) return 'limited';
        return 'full'; // age >= 18
    }

    // ----- get the appropriate icon & style class -----
    function getAlertStyle(condition) {
        switch (condition) {
            case 'too-young':
                return { icon: 'fa-solid fa-circle-exclamation', cssClass: 'danger' };
            case 'limited':
                return { icon: 'fa-solid fa-triangle-exclamation', cssClass: 'warning' };
            case 'full':
                return { icon: 'fa-solid fa-circle-check', cssClass: 'success' };
            default:
                return { icon: 'fa-solid fa-info-circle', cssClass: 'info' };
        }
    }

    // ----- render the alert -----
    function renderAlert(username, age, email) {

        // 1. validate inputs
        const trimmedName = username.trim();
        const trimmedEmail = email.trim();

        if (!trimmedName) {
            alertBox.className = 'alert-box danger';
            alertMessage.innerHTML =
                `<i class="fas fa-exclamation-circle" style="color:#dc2626; margin-right:8px;"></i> Please enter a <strong>username</strong>.`;
            return;
        }

        if (!age || isNaN(age) || age < 1 || age > 120) {
            alertBox.className = 'alert-box danger';
            alertMessage.innerHTML =
                `<i class="fas fa-exclamation-circle" style="color:#dc2626; margin-right:8px;"></i> Please enter a valid <strong>age</strong> (1–120).`;
            return;
        }

        if (!trimmedEmail || !trimmedEmail.includes('@') || !trimmedEmail.includes('.')) {
            alertBox.className = 'alert-box danger';
            alertMessage.innerHTML =
                `<i class="fas fa-exclamation-circle" style="color:#dc2626; margin-right:8px;"></i> Please enter a valid <strong>email</strong> address.`;
            return;
        }

        // 2. determine condition
        const ageNum = Number(age);
        const condition = getCondition(ageNum);

        // 3. build the message
        const msgHtml = buildAlert(trimmedName, ageNum, trimmedEmail, condition);

        // 4. style & icon
        const style = getAlertStyle(condition);
        alertBox.className = `alert-box ${style.cssClass}`;

        // 5. inject into the alert box
        alertMessage.innerHTML = `
                    <i class="${style.icon}" style="margin-right:10px;"></i>
                    ${msgHtml}
                `;
    }

    // ----- form submit handler -----
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        renderAlert(usernameInput.value, ageInput.value, emailInput.value);
    });

    // ----- auto‑demo on page load -----
    window.addEventListener('DOMContentLoaded', function() {
        // Pre‑fill with sample data (age 16 → "limited" option)
        usernameInput.value = 'AlexRivera';
        ageInput.value = '16';
        emailInput.value = 'alex.r@example.com';

        // Trigger the alert automatically
        renderAlert(usernameInput.value, ageInput.value, emailInput.value);
    });

})();