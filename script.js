const loginForm = document.querySelector("form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const loginButton = document.getElementById("login-button");

if (localStorage.getItem("isLoggedIn") === "true") {
  // Jika sudah login, arahkan pengguna ke halaman home.html
  window.location.href = "home.html";
}

loginButton.addEventListener("click", (e) => {
  e.preventDefault();

  const email = emailInput.value;
  const password = passwordInput.value;

  if (email === "nadiaanjani@gusanta.com" && password === "ilovegusanta") {
    // Tampilkan pesan sukses
    alert("Login berhasil!");
    // Simpan informasi login pengguna di localStorage
    localStorage.setItem("isLoggedIn", "true");
    // Arahkan pengguna ke halaman home.html
    window.location.href = "home.html";
  } else {
    // Tampilkan pesan error
    console.log(email);
    console.log(password);

    alert("Login gagal!");
  }
});
