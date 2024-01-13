
    var nameInput = document.getElementById("name");
    var passwordInput = document.getElementById("password");
    var submitButton = document.getElementById("submit-btn");

    submitButton.addEventListener("click", function(event) {
        event.preventDefault();         
        var name = nameInput.value;
        var password = passwordInput.value;
        
        if (name === "admin" && password === "admin123") {
            alert("Login successful!");
        } else {
            alert("Invalid username or password. Please try again.");
        }
        nameInput.value = "";
        passwordInput.value = "";
    });