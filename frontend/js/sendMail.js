import { EMAILJS_CONFIG } from './config/config.js';

emailjs.init({
    publicKey: EMAILJS_CONFIG.publicKey
});


function sendMail(){
    params = {
         personName: document.querySelector('#name'),
         surname: document.querySelector('#surname'),
         email: document.querySelector('#email'),
         gender: document.querySelector('#gender'),
         message: document.querySelector('#message'),
         requestType: document.querySelector('input[name="type"]:checked')
    }
    emailjs.sendMail(EMAILJS_CONFIG.serviceID, EMAILJS_CONFIG.templateID,params).then(() => 
        alert("Email başarıyla gönderildi!")).catch((error) => 
        alert("Gönderim hatası: " + error));
}
