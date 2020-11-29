function isPasswordMatch()
{
    //Store the password field objects into variables ...
    var password = document.getElementById('password');
    var confirm  = document.getElementById('confirm-password');

    if(password.value == confirm.value){

        document.getElementById("img-icon").classList.add("icon")
        document.getElementById("img-icon").src = "/img/check.svg";

        return true;

    }else{

        document.getElementById("img-icon").classList.add("icon")
        document.getElementById("img-icon").src = "/img/cross.svg";
        return false
    }
}

function validateForm() {
    var email = document.getElementById('usename');
    var validate = isPasswordMatch() && isValidEmail(email);
    return validate;
}

function isValidEmail (email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }