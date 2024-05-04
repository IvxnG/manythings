function generatePassword() {
    let length = parseInt(document.getElementById("length").value);
    let uppercase = document.getElementById("uppercase").checked;
    let lowercase = document.getElementById("lowercase").checked;
    let numbers = document.getElementById("numbers").checked;
    let symbols = document.getElementById("symbols").checked;
    
    let charset = "";
    if (uppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lowercase) charset += "abcdefghijklmnopqrstuvwxyz";
    if (numbers) charset += "0123456789";
    if (symbols) charset += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    
    let password = "";
    for (let i = 0; i < length; i++) {
        password += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    
    document.getElementById("passwordResult").innerHTML = password;
}
function copyPassword() {
    var password = document.getElementById("passwordResult").textContent;
    
    var tempInput = document.createElement("input");
    tempInput.setAttribute("value", password);
    document.body.appendChild(tempInput);
    
    tempInput.select();
    tempInput.setSelectionRange(0, 99999);
    
    document.execCommand("copy");
   
    document.body.removeChild(tempInput);
    
    alert("Contraseña copiada al portapapeles");
}
