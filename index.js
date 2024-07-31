let vowels = ['e', 'i', 'a', 'o', 'u'];
let convertedVowels = ['enter', 'imes', 'ai', 'ober', 'ufat'];

let newPhrase = [''];
let expectedPhrase = 'oberimes enterufat soberufat ober aindrenter';
let expectedPhrase2 = 'oi eu sou o andre';

getEventText() 

function getEventText() {
    document.addEventListener('DOMContentLoaded', function() {
        document.getElementById('encryptSubmit').addEventListener('click', function(e) {
            e.preventDefault();
    
            let textForm = document.getElementById('encodedText').value;
            console.log(textForm.length);
    
            if (textForm.length != 0) {
                let phraseEncrypt = encryptPhrase(textForm);
    
                sendTextToDisplay(phraseEncrypt);
            }
        });

        document.getElementById('descryptSubmit').addEventListener('click', function(e) {
            e.preventDefault();
    
            let textForm = document.getElementById('encodedText').value;
            console.log(textForm.length);
    
            if (textForm.length != 0) {
                let phraseDescrypt = decryptPhrase(textForm);
    
                sendTextToDisplay(phraseDescrypt);
            }
        });
    });

    document.getElementById('encryptSubmit').addEventListener('click', () => true);

}

function encryptPhrase(phrase) {
    phrase = phrase.toLocaleLowerCase();

    for (let i = 0; i < phrase.length; i++) {
        let isVowel = verifyVowel(phrase, i);

        if (isVowel) {
            criptographVowel(phrase, i);
            continue;
        }

        let isSpace = verifySpace(phrase, i);

        if (isSpace) {
            criptographSpace(phrase, i);
            continue;
        }

        let isConsonant = verifyConsonant(phrase, i);

        if (isConsonant) {
            criptographConsonant(phrase, i);
            continue;
        }
    }

    // Minha frase: ei ia ao ou uu
    // Frase Encriptada: enter imes ai ober ufatenterimes imesai aiober oberufat ufatufat

    console.log('       Minha frase: ' + phrase);
    console.log('  Frase Encriptada: ' + newPhrase);

   return newPhrase;
}

function sendTextToDisplay(phrase) {
    document.getElementById("mytext").innerText = phrase;
}

function decryptPhrase(phrase) {
    // let text = navigator.clipboard
    // .readText()
    // .then(
    //   (clipText) => (document.querySelector(".encodedText").innerText += clipText),
    // );

    let newPhrase = decryptVowels(phrase);

    console.log('       Minha frase: ' + expectedPhrase);
    console.log(' Frase Descriptada: ' + newPhrase);
    
    return newPhrase;
}

function decryptVowels(params) {
    let newPhrase = params;

    for (let index = 0; index < convertedVowels.length; index++) {
        const regex = new RegExp(convertedVowels[index], 'g'); // Criando a expressão regular

        newPhrase = newPhrase.replace(regex, vowels[index]);
    }

    return newPhrase;
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