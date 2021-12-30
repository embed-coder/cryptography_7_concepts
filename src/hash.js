const { createHash } = require('crypto');

// Create a string hash
function hash(input) {
    return createHash('sha256').update(input).digest('base64');
}

// Compare 2 hashed passwords
let password = 'hi-mon!';
const hash1 = hash(password);
console.log(hash1);


password = 'hi-mon';
const hash2 = hash(password);
console.log(hash2);

const match = hash1 === hash2;
console.log(match ? '✔ Correct password' : '❌ Passwords does not match!')