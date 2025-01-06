const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    message = message.toUpperCase();
    key = key.toUpperCase();

    let encrypted = '';
    let keyIndex = 0;

    for (let char of message) {
      if (alphabet.includes(char)) {
        const messageIndex = alphabet.indexOf(char);
        const keyCharIndex = alphabet.indexOf(key[keyIndex]);
        const shift = (messageIndex + keyCharIndex) % 26;
        encrypted += alphabet[shift];
        keyIndex = (keyIndex + 1) % key.length;
      } else {
        encrypted += char;
      }
    }

    return this.isDirect ? encrypted : encrypted.split('').reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');

    }
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();

    let decrypted = '';
    let keyIndex = 0;

    for (let char of encryptedMessage) {
      if (alphabet.includes(char)) {
        const encryptedIndex = alphabet.indexOf(char);
        const keyCharIndex = alphabet.indexOf(key[keyIndex]);
        const shift = (encryptedIndex - keyCharIndex + 26) % 26;
        decrypted += alphabet[shift];
        keyIndex = (keyIndex + 1) % key.length;
      } else {
        decrypted += char;
      }
    }

    return this.isDirect ? decrypted : decrypted.split('').reverse().join('');
  }
}




module.exports = {
  VigenereCipheringMachine
};
