const CryptoJS = require('crypto-js');
const fs = require('fs');

function EncryptCode(code) {
  const key = 'key here';
  const encrypted = CryptoJS.AES.encrypt(code, key).toString();
  return encrypted;
}

function DecryptCode(encryptedCode) {
  const key = 'key here';
  const decrypted = CryptoJS.AES.decrypt(encryptedCode, key).toString(CryptoJS.enc.Utf8);
  return decrypted;
}

function RunEncryptedCode(encryptedCode) {
  const decryptedCode = DecryptCode(encryptedCode);
  eval(decryptedCode);
}

function ReadCodeFromFile(filepath) {
  const code = fs.readFileSync(filepath, 'utf-8');
  return code;
}
