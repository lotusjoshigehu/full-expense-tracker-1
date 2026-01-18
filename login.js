document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    fetch("http://localhost:3000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
    })
    .then(res => res.json())
    .then(data => {
        if (data === "Invalid credentials") {
            alert("Invalid email or password");
            return;
        }
        alert("Login successful");
    });
});

function goToSignup() {
    window.location.href = "signup.html";
}
