function validate(e) {
    e.preventDefault();

    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    const age = document.getElementById("age").value
    const msg = document.getElementById("message")

    let message ="";

    if (email ==="") {
        message ="please enter an email"
        msg.style.color="red"
    }

    else if (password === "") {
        message = "please enter an password"
        msg.style.color = "red"
    }
    else if (age === "") {
        message = "please enter an age"
        msg.style.color = "red"
    }
    else  {
        message = "login successfully"
        msg.style.color = "green"
    }
msg.innerHTML= message
}