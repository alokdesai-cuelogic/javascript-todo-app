function validateEmail(emailField){
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	if (reg.test(emailField.value) == false) 
    {
        alert('Invalid Email Address');
        return false;
    }
    return true;
}


function validate() {
    var email = document.getElementById("email");
    var fname = document.getElementById("first_name");
    var lname = document.getElementById("last_name");

    if (validateEmail(document.getElementById("email")) && validatefname(fname) && validatelname(lname) && validatepassword()) {
        return true;
    } else {
        return false;
    }
}

function validatefname(name) {
    if(name.value.length==0){
         alert('Enter first name');
        return false;
    }
    else {
        return true;
    }
}

function validatelname(name) {
     if(name.value.length==0){
        alert('Enter last name');
        return false;
    }
    else {
        return true;
    } 
}

function validatepassword() {
    var pwd1 = document.getElementById("register_password").value;
        if(pwd1.length==0){
            alert('Enter password');
            return false;
        } else {
            return true;
        }
}