export function sendMessage(ws, genderValue, personNameValue, surnameValue, emailValue, requestTypeValue, messageValue){
    ws.send(JSON.stringify({
        command: 'sendFormValues',
        gender: genderValue,
        personName: personNameValue,
        surname: surnameValue,
        email: emailValue,
        requestType: requestTypeValue,
        message: messageValue
    }));
}