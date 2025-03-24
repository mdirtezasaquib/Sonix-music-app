async function handleLogin() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let data = await loginUser(email, password);
    if (data.token) {
        localStorage.setItem("userToken", data.token);
        window.location.href = "home.html";
    } else {
        alert("Login failed!");
    }
}
