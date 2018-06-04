
function processForm(e) {
    if (e.preventDefault) e.preventDefault();

   registerUser();
    return false;
}

function openRegister(){
    window.location = "register.html";
}

function openLogin(){
    window.location = "index.html";
}

function registerUser() {
    if (validate()) {
        var newdata = getData();
        window.alert("user " + newdata.Fname + " " + newdata.Lname + " registered successfully");
        setUser(newdata.Email);
        var allEntries = getArray();
        allEntries.push(newdata);
        setArray(allEntries);
        window.location = "./Assets/html/homepage.html";
        return true;
    } else {
        return false;
    }
}

function User(Fname, Lname, Email, Address, imgurl, pwd, gender) {
    this.Fname = Fname;
    this.Lname = Lname;
    this.Email = Email;
    this.Address = Address;
    this.imgurl = imgurl;
    this.pwd = pwd;
    this.gender = gender;
}

function getData() {
    var Fname = document.getElementById("first_name").value;
    var Lname = document.getElementById("last_name").value;
    var Email = document.getElementById("email").value;
    var Address = document.getElementById("address").value;
    var imgurl = document.getElementById("profile_image").value;
    var pwd = document.getElementById("register_password").value;
    var gender = document.getElementById("gender").value;
    var newUserObj = new User(Fname, Lname, Email, Address, imgurl, pwd, gender);
    return newUserObj;
}

function login(event) {

    event.preventDefault();
     if(validateEmail(document.getElementById("email")))
       {

 
    var emailaddr = document.getElementById("email").value;
    var pwd = document.getElementById("login_password").value;
    var allEntries = getArray();
    var x = search(emailaddr, pwd, allEntries);
    if (x != null) {
        window.alert("welcome");
        setUser(emailaddr);
        window.location = './Assets/html/homepage.html';

    } else
    {   
        alert("Invalid Credentials");
        return false;
        }

       }
       return false;

   
}

function search(username, pwd, allEntries) {
    for (x = 0; x < allEntries.length; x++) {
        if ((username == allEntries[x].Email) && (pwd == allEntries[x].pwd))
            return x;
    }
    return null;
}