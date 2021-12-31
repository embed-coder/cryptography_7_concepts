// IV: Initialization Vector
const { createCipheriv, randomBytes, createDecipheriv } = require('crypto');

/// Cipher
const message = 'i like turtules';
const key = randomBytes(32);
const iv = randomBytes(16);

// create a cipher with algorithm aes-advanced encryption standard 256 bits
const cipher = createCipheriv('aes256', key, iv);

/// Encrypt
const encryptedMessage = cipher.update(message, 'utf8', 'hex') + cipher.final('hex');
console.log(`Encrypted: ${encryptedMessage}`);

/// Decrypt
const decipher = createDecipheriv('aes256', key, iv);
const decryptedMessage = decipher.update(encryptedMessage, 'hex', 'utf-8') + decipher.final('utf8');
console.log(`Deciphered: ${decryptedMessage.toString('utf-8')}`);