let vowels = ['e', 'i', 'a', 'o', 'u'];
let convertedVowels = ['enter', 'imes', 'ai', 'ober', 'ufat'];

let newPhrase = [''];
let expectedPhrase = 'oberimes enterufat soberufat ober aindrenter';
let expectedPhrase2 = 'oi eu sou o andre';

getEventText()
copyText()
preventFontText()
changeDisplayContent()

function getEventText() {
    document.addEventListener('DOMContentLoaded', function () {
        document.getElementById('encryptSubmit').addEventListener('click', function (e) {
            e.preventDefault();

            let textForm = document.getElementById('encodedText').value;
            console.log(textForm);

            if (textForm.length != 0) {
                let phraseEncrypt = encryptPhrase(textForm);
                console.log(phraseEncrypt);

                sendTextToDisplay(phraseEncrypt);

                newPhrase = [''];
            }
        });

        document.getElementById('descryptSubmit').addEventListener('click', function (e) {
            e.preventDefault();

            let textForm = document.getElementById('encodedText').value;

            if (textForm.length != 0) {
                let phraseDescrypt = decryptPhrase(textForm);

                sendTextToDisplay(phraseDescrypt);

                newPhrase = [''];
            }
        });
    });
}

function encryptPhrase(phrase) {
    phrase = phrase.toLocaleLowerCase();

    for (let i = 0; i < phrase.length; i++) {
        let isVowel = verifyVowel(phrase, i);

        if (isVowel) {
            newPhrase = criptographVowel(phrase, i);
            continue;
        }

        let isSpace = verifySpace(phrase, i);

        if (isSpace) {
            newPhrase = criptographSpace(phrase, i);
            continue;
        }

        let isConsonant = verifyConsonant(phrase, i);

        if (isConsonant) {
            newPhrase = criptographConsonant(phrase, i);
            continue;
        }
    }

    console.log('       Minha frase: ' + phrase);
    console.log('  Frase Encriptada: ' + newPhrase);

    return newPhrase;
}

function sendTextToDisplay(phrase) {
    document.getElementById("mytext").innerText = phrase;
}

function changeDisplayContent() {
    document.addEventListener('DOMContentLoaded', function () {
        document.getElementById('encryptSubmit').addEventListener('click', function (e) {
            e.preventDefault();

            let content = document.getElementById('container-dencodingForm');
            let content2 = document.getElementById('container-dencodingForm-final');

            content.style.display = 'none';
            content2.style.display = 'block';

            content2.style.height = '31rem';
            content2.style.display = 'flex';
            content2.style.flexDirection = 'column';
            content2.style.alignItems = 'center';
            content2.style.justifyContent = 'space-between';
            content2.style.margin = '1rem 5rem';
            content2.style.backgroundColor = 'white';
            content2.style.borderRadius = '1rem';
            content2.style.width = '20rem';
            content2.style.padding = '2rem 3rem';
            content2.style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.1)';
        });

        document.getElementById('descryptSubmit').addEventListener('click', function (e) {
            e.preventDefault();

            let content = document.getElementById('container-dencodingForm');
            let content2 = document.getElementById('container-dencodingForm-final');

            content.style.display = 'none';
            content2.style.display = 'block';

            content2.style.height = '31rem';
            content2.style.display = 'flex';
            content2.style.flexDirection = 'column';
            content2.style.alignItems = 'center';
            content2.style.justifyContent = 'space-between';
            content2.style.margin = '1rem 5rem';
            content2.style.backgroundColor = 'white';
            content2.style.borderRadius = '1rem';
            content2.style.width = '20rem';
            content2.style.padding = '2rem 3rem';
            content2.style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.1)';
        });
    });
}

function preventFontText() {
    document.addEventListener('DOMContentLoaded', function () {
        document.getElementById('encryptSubmit').addEventListener('click', function (e) {
            e.preventDefault();

            let text = document.getElementById("mytext");

            if (text.innerText.length > 19) {
                text.style.fontSize = "1rem";
            } else {
                text.style.fontSize = "2rem";
            }
        });

        document.getElementById('descryptSubmit').addEventListener('click', function (e) {
            e.preventDefault();

            let text = document.getElementById("mytext");

            if (text.innerText.length > 19) {
                text.style.fontSize = "1rem";
            } else {
                text.style.fontSize = "2rem";
            }
        });
    });
}

function copyText() {
    document.addEventListener('DOMContentLoaded', function () {
        document.getElementById('copymytext').addEventListener('click', async function (e) {
            const elemento = document.getElementById('mytext');
            const texto = elemento.innerText;
            await navigator.clipboard.writeText(texto);
            alert("Texto copiado!");
        });
    });
}

function decryptPhrase(phrase) {
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

    return newPhrase;
}

function criptographSpace(phrase, index) {
    newPhrase[0] = newPhrase[0] + phrase[index];

    return newPhrase;
}

function criptographConsonant(phrase, index) {
    newPhrase[0] = newPhrase[0] + phrase[index];

    return newPhrase;
}