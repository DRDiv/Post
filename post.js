function check(el1, el2) {
    if (el1.value != el2.value || el1.value == "" || el2.value == "") {

        var c = document.getElementById('passwordclass')
        if (!c.querySelector("p")) {
            let p = document.createElement("p")
            p.textContent = "*invalid field"
            p.className = "error"
            c.appendChild(p)
        }
        alert("PASSWORD DO NOT MATCH")
        el1.value = ""
        el2.value = ""
        return false

    }
    else {
        var c = document.getElementById('passwordclass')
        if (c.querySelector("p")) {
            c.removeChild(c.querySelector("p"));
        }
        return true;
    }
}
function checks(id, reg2) {
    if (!reg2.test(id)) {
        var c = document.getElementById('emailclass')
        if (!c.querySelector("p")) {
            let p = document.createElement("p")
            p.textContent = "*invalid field"
            p.className = "error"
            c.appendChild(p)
        }
        alert("INVALID EMAIL ID");
        return false

    }
    else {
        var c = document.getElementById('emailclass')
        if (c.querySelector("p")) {
            c.removeChild(c.querySelector("p"));
        }
        return true
    }
}
async function trying(id, el1,el2,email) {
    try {
      let response = await fetch("https://reqres.in/api/login", {
        method: "post",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: id,
          password: el1.value
        })
      });
  
      if (response.ok) {
        alert("SUCCESSFUL");
        el1.value = "";
        el2.value = "";
        email.value = "";
      } else {
        alert("UNSUCCESSFUL");
      }
    } catch (error) {
      alert("ERROR OCCURRED");
    }
  }

document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        var el1 = document.getElementById('password')
        var el2 = document.getElementById('cpassword')
        var email = document.getElementById('email')
        var id = email.value;
        var reg1 = /^[a-zA-Z]{1}[A-Za-z_.]*@[a-zA-Z]+(\.[a-zA-Z]+)?(\.ac\.in|\.com|\.in)$/;
        b1 = check(el1, el2);
        b2 = checks(id, reg1);

        if (b1 && b2) {
            let pro=trying(id,el1,el2,email)
                
                

        }
    }

});