var obj;
var allEntries;

function loadprofile() {
    username = getUser();

    var allEntries = getArray();
    var x = search(username, allEntries);
    obj = allEntries[x];
    document.getElementById("email").value = obj.Email;
    document.getElementById("first_name").value = obj.Fname;
    document.getElementById("last_name").value = obj.Lname;
    document.getElementById("gender").value = obj.gender;
    document.getElementById("address").value = obj.Address;
    document.getElementById("user_image").value = obj.imgurl;
}

function search(username, allEntries) {
    for (x = 0; x < allEntries.length; x++) {
        if (username == allEntries[x].Email)

            return x;

    }

}

function makeEditable() {
    document.getElementById("email").style.backgroundColor="rgba(0, 0, 0, 0.2)";
    document.getElementById("first_name").readOnly = false;
    document.getElementById("last_name").readOnly = false;
    document.getElementById("gender").readOnly = false;
    document.getElementById("address").readOnly = false;
    document.getElementById("user_image").readOnly = false;
    document.getElementById("first_name").style.borderColor="green";
    document.getElementById("last_name").style.borderColor="green";
    document.getElementById("gender").style.borderColor="green";
    document.getElementById("address").style.borderColor="green";
    document.getElementById("user_image").style.borderColor="green";
}

function updateInfo() {
     username = getUser();
    var allEntries = getArray();
    var x = search(username, allEntries);
    obj = allEntries[x];
    obj.Fname = document.getElementById("first_name").value;
    obj.Lname = document.getElementById("last_name").value;
    obj.gender = document.getElementById("gender").value;
    obj.Address = document.getElementById("address").value;
    obj.imgurl = document.getElementById("user_image").value;
    
    setArray(allEntries);

    window.alert("profile updated successfully");

}