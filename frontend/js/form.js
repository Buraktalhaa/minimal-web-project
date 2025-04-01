import { sendMessage } from "./helpers.js";

// Form
const contactForm = document.querySelector('#contactForm');

// Form buttons
const sendButton = document.querySelector('#sendButton');
const resetButton = document.querySelector('#resetButton');

// Form objects
const personName = document.querySelector('#name');
const surname = document.querySelector('#surname');
const email = document.querySelector('#email');
const gender = document.querySelector('#gender');
const message = document.querySelector('#message');
const terms = document.querySelector('#terms');
const requestType = document.querySelector('input[name="type"]:checked');


// Send button click
sendButton?.addEventListener('click', (event) => {
    event.preventDefault();

    const genderValue = gender?.value;
    const personNameValue = personName?.value;
    const surnameValue = surname?.value;
    const emailValue = email?.value;
    const requestTypeValue = requestType.value;
    const messageValue = message?.value;
    const termsAccepted = terms?.checked;

    if (!personNameValue || !surnameValue || !emailValue || !messageValue || !termsAccepted) {
        alert("Lütfen zorunlu alanları doldurun ve şartları kabul edin.");
        return;
    }


    // Create WebSocket connection
    const ws = new WebSocket('ws://localhost:8080');


    ws.onopen = function () {
        sendMessage(ws, genderValue,personNameValue,surnameValue,emailValue,requestTypeValue,messageValue,termsAccepted)
    };

    console.log("Gender: ", genderValue);
    console.log("Name: ", personNameValue);
    console.log("Surname: ", surnameValue);
    console.log("Email: ", emailValue);
    console.log("Request type: ", requestTypeValue);
    console.log("Message:", messageValue);
    console.log("Is terms and conditions accepted?: ", termsAccepted);

    alert("Mesaj basariyla gonderildi.")
    contactForm.reset();
});




