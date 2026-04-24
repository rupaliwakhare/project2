// SIGNUP
function signupUser() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const mobile = document.getElementById("mobile").value;
  const password = document.getElementById("password").value;

  if (!name || !email || !mobile || !password) {
    alert("Please fill all fields");
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];

  // check already exists
  const exists = users.find((u) => u.email === email || u.mobile === mobile);

  if (exists) {
    alert("User already exists!");
    return;
  }

  users.push({ name, email, mobile, password });

  localStorage.setItem("users", JSON.stringify(users));

  alert("Signup successful!");
  window.location.href = "login.html";
}

// LOGIN
function loginUser() {
  const input = document.getElementById("loginInput").value;
  const password = document.getElementById("loginPassword").value;

  let users = JSON.parse(localStorage.getItem("users")) || [];

  const user = users.find(
    (u) => (u.email === input || u.mobile === input) && u.password === password,
  );

  if (!user) {
    alert("Invalid credentials!");
    return;
  }

  // save logged user
  localStorage.setItem("loggedInUser", JSON.stringify(user));

  alert("Login successful!");
  window.location.href = "../index.html";
}
