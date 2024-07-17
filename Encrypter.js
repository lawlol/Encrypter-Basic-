// Imports
const CryptoJS = require('crypto-js');
const fs = require('fs');

// Encrypting
function EncryptCode(code) {
  const key = 'key here';
  const encrypted = CryptoJS.AES.encrypt(code, key).toString();
  return encrypted;
}

// Decrypting
function DecryptCode(encryptedCode) {
  const key = 'key here';
  const decrypted = CryptoJS.AES.decrypt(encryptedCode, key).toString(CryptoJS.enc.Utf8);
  return decrypted;
}

// Running the encrypted code
function RunEncryptedCode(encryptedCode) {
  const decryptedCode = DecryptCode(encryptedCode);
  eval(decryptedCode);
}

// Read code from a file
function ReadCodeFromFile(filepath) {
  const code = fs.readFileSync(filepath, 'utf-8');
  return code;
}
