import DOMPurify from 'dompurify';

// Form Validation
let form = document.querySelector("form");
let nameInput = document.querySelector("#name");
let emailInput = document.querySelector("#email");
let messageInput = document.querySelector("#message");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    if (nameInput.value === "" || emailInput.value === "" || messageInput.value === "") {
        alert("Please fill out all fields.");
        return;
    }

    // Sanitize user input
    const sanitizedName = DOMPurify.sanitize(nameInput.value);
    const sanitizedEmail = DOMPurify.sanitize(emailInput.value);
    const sanitizedMessage = DOMPurify.sanitize(messageInput.value);

    // Create a new form with sanitized input
    const sanitizedForm = document.createElement("form");
    sanitizedForm.innerHTML = `
        <div>
            <label for="name">Name</label>
            <input type="text" id="name" name="name" value="${sanitizedName}" readonly>
        </div>
        <div>
            <label for="email">Email</label>
            <input type="email" id="email" name="email" value="${sanitizedEmail}" readonly>
        </div>
        <div>
            <label for="message">Message</label>
            <textarea id="message" name="message" readonly>${sanitizedMessage}</textarea>
        </div>
    `;

    // Submit the sanitized form
    sanitizedForm.submit();
});

// Display the sanitized input on the page
const outputElement = document.querySelector('#output');
outputElement.textContent = sanitizedInput;




