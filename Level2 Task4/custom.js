const users = {};
  
function hashPassword(password) {
  return btoa(password);
}

function toggleForm(form) {
  const registrationContainer = document.getElementById("registration-container");
  const loginContainer = document.getElementById("login-container");

  if (form === "registration") {
    registrationContainer.style.display = "block";
    loginContainer.style.display = "none";
  } else if (form === "login") {
    registrationContainer.style.display = "none";
    loginContainer.style.display = "block";
  }
}

function registerUser() {
  const username = document.getElementById("regUsername").value;
  const password = document.getElementById("regPassword").value;
  const hashedPassword = hashPassword(password);

  if (users[username]) {
    alert("Username already exists. Please choose another.");
  } else {
    users[username] = hashedPassword;
    alert("Registration successful!");
  }
}

function authenticateUser() {
  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;
  const hashedPassword = hashPassword(password);

  if (users[username] && users[username] === hashedPassword) {
    alert("Login successful!");
    showProtectedPage();
  } else {
    alert("Login failed. Please check your credentials.");
  }
}

function showProtectedPage() {
  const loginContainer = document.getElementById("login-container");
  const protectedPage = document.querySelector(".protected-page");
  loginContainer.style.display = "none";
  protectedPage.style.display = "block";
}

function logout() {
  const loginContainer = document.getElementById("login-container");
  const protectedPage = document.querySelector(".protected-page");
  loginContainer.style.display = "block";
  protectedPage.style.display = "none";
}