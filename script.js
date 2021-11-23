function validation() {
    var fullName = document.getElementById("fullName").value;
    var eMail = document.getElementById("eMail").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    var selCountry = document.getElementById("selCountry").value;
    var error_message = document.getElementById("error_message");
    var text;

    error_message.style.padding = "10px";

    if (fullName.length < 5 || x == "") {
        text = "Please enter valid name.";
        error_message.innerHTML = text;
        return false;
    }
    if (eMail.length < 7 || x == "") {
        text = "Please enter valid email."
        error_message.innerHTML = text;
        return false;
    }
    if (phoneNumber.length < 10 || x == "") {
        text = "Please enter phone number."
        error_message.innerHTML = text;
        return false;
    }

    alert("Form submitted successfully!")
    return true;
}
/*
function finishFunction() {
    alert("Thank you for submitting your form!");
}
*/