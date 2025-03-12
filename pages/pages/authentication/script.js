async function registerUser(event) {
    event.preventDefault();

    const userData = {
        name: document.getElementById('name').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        upi: document.getElementById('upi').value,
        wallet_address: document.getElementById('wallet').value,
        coins: document.getElementById('coins').value,
        price: document.getElementById('price').value
    };

    const response = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData)
    });

    const data = await response.json();
    alert(data.message);
}

async function loginUser(event) {
    event.preventDefault();

    const loginData = {
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    };

    const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginData)
    });

    const data = await response.json();
    if (response.ok) {
        localStorage.setItem("token", data.token);
        alert("Login Successful!");
    } else {
        alert(data.error);
    }
}
