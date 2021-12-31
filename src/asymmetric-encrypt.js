// Public key of a website is included in the ssl certificate when a web client trust it
// Web client will extract the pub key from the certificate and use it to encrypt the sending data
const { publicEncrypt, privateDecrypt } = require('crypto');
const { publicKey, privateKey} = require('./keypair');

const message = 'the british are coming!'

const encryptedData = publicEncrypt(
    publicKey,
    Buffer.from(message)
);

console.log(encryptedData.toString('hex'));

const decryptedData = privateDecrypt(
    privateKey,
    encryptedData
);

console.log(decryptedData.toString('utf8'));