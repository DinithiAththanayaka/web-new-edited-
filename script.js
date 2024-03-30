function signup() {
    var fname = document.getElementById("username").value;
    var pw = document.getElementById("em").value;
    var em = document.getElementById("pw").value;

    var formData = new FormData();
    formData.append("username", fname);
    formData.append("em", pw);
    formData.append("pw", em);

    var r = new XMLHttpRequest();
    r.onreadystatechange = function () {

        if (r.readyState == 4) {
            var t = r.responseText;
            if (t == "Success") {
                alert(t);
                window.location = "index.php";
            } else {
                alert(t);
            }
        }

    };
    r.open("POST", "signupProcess.php", true);
    r.send(formData);
}

function signin(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var formData = new FormData();
    formData.append("email", em);
    formData.append("password", pw);

    var r = new XMLHttpRequest();
    r.onreadystatechange = function () {

        if (r.readyState == 4) {
            var t = r.responseText;
            if (t == "Valid") {
                alert("Success !!!")
                window.location ="home.php";
            } else {
                alert(t);
            }
        }

    };
    r.open("POST", "signinProcess.php", true);
    r.send(formData);
}