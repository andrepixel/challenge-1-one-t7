let vowels = ['e', 'i', 'a', 'o', 'u'];
let convertedVowels = ['enter', 'imes', 'ai', 'ober', 'ufat'];

let phrase = 'oi eu sou o andre';
let newPhrase = [''];
let expectedPhrase = 'oberimes enterufat soberufat ober aindrenter';

function encryptPhrase(params) {
    params = phrase;

    params = params.toLocaleLowerCase();

    for (let i = 0; i < params.length; i++) {
        let isVowel = verifyVowel(phrase, i);

        if (isVowel) {
            criptographVowel(params, i);
            continue;
        }

        let isSpace = verifySpace(phrase, i);

        if (isSpace) {
            criptographSpace(params, i);
            continue;
        }

        let isConsonant = verifyConsonant(phrase, i);

        if (isConsonant) {
            criptographConsonant(params, i);
            continue;
        }
    }

    console.log('       Minha frase: ' + newPhrase);
    console.log('Resultado esperado: ' + expectedPhrase);
}

function verifyVowel(phrase, index) {
    if (vowels.includes(phrase[index])) {
        return true;
    }

    return false;
}

function verifySpace(phrase, index) {
    if (phrase[index] === ' ') {
        return true;
    }

    return false;
}

function verifyConsonant(phrase, index) {
    if (!vowels.includes(phrase[index])) {
        return true;
    }

    return false;
}

function criptographVowel(phrase, index) {
    let value = phrase[index];

    let valueVowels = vowels.findIndex(element => element === value);
   
    newPhrase[0] = newPhrase[0] + convertedVowels[valueVowels];

    return;
}

function criptographSpace(phrase, index) {
    newPhrase[0] = newPhrase[0] + phrase[index];
}

function criptographConsonant(phrase, index) {
    newPhrase[0] = newPhrase[0] + phrase[index];

    return;
}

encryptPhrase(phrase);