const generateBtn = document.getElementById('btn');
const copyBtn = document.getElementById('copy-btn');
const password = document.getElementById('password');

// Character sets
const alphabetsUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const alphabetsSmaller = alphabetsUpper.toLowerCase();
const numbers = "0123456789";
const symbols = "\"!@#$%^&*()_+=~`{}[]|\\;:'<>,.?/";
const allAlphabets = alphabetsSmaller + alphabetsUpper + numbers + symbols;

let length = 12;

// Generate password
function generatePassword() {
    let passwordGene = "";

    // Ensure at least one character from each group
    passwordGene += alphabetsUpper[Math.floor(Math.random() * alphabetsUpper.length)];
    passwordGene += alphabetsSmaller[Math.floor(Math.random() * alphabetsSmaller.length)];
    passwordGene += numbers[Math.floor(Math.random() * numbers.length)];
    passwordGene += symbols[Math.floor(Math.random() * symbols.length)];

    // Fill the rest with random characters from all groups
    while (passwordGene.length < length) {
        passwordGene += allAlphabets[Math.floor(Math.random() * allAlphabets.length)];
    }

    // Shuffle the password
    passwordGene = passwordGene.split('').sort(() => Math.random() - 0.5).join('');

    password.value = passwordGene; // Set the generated password in the input
}

// Copy password to clipboard
function copyPassword() {
    if (password.value) {
        navigator.clipboard.writeText(password.value)
            .then(() => {
                alert('Copied successfully: ' + password.value);
            })
            .catch(err => {
                alert('Something went wrong!');
            });
    } else {
        alert('The field is empty. Generate a password first.');
    }
}

// Event listeners
generateBtn.addEventListener('click', generatePassword);
copyBtn.addEventListener('click', copyPassword);