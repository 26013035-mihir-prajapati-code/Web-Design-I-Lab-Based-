document.getElementById("submitBtn").addEventListener("click", validateForm);

function validateForm(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === "") {
        document.getElementById("message").innerHTML = "Error: Name Cannot Be Empty.";
    } else if (!emailPattern.test(email)) {
        document.getElementById("message").innerHTML = "Error: Please enter a valid email format.";
    } else {
        document.getElementById("message").innerHTML = "Success: Registration Completed Successfully !";
    }
}
