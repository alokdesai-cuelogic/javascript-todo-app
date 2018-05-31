$(document).ready(function(){
    $("a").click(function(){
        $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
    });
});

function registerUser(event) {
   // event.preventDefault();
    if (validateEmail(document.getElementById("email"))) {
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