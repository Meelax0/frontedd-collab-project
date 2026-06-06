const loginSection=document.querySelector(".Login-auth");
const RegisterSection=document.querySelector(".register-auth");

const showRegister=document.getElementById("ShowRegister");
const showLogin=document.getElementById("ShowLogin");

showRegister.addEventListener("click",function(e){
    e.preventDefault();
    loginSection.classList.add("hidden");
    RegisterSection.classList.remove("hidden");
});
showLogin.addEventListener("click",function(e){
    e.preventDefault();
    RegisterSection.classList.add("hidden");
    loginSection.classList.remove("hidden");
});

const RegisterForm=document.getElementById("RegisterForm");

RegisterForm.addEventListener("submit",function(e){

    e.preventDefault();

    const name=document.getElementById("registerName").value.trim();
    const email=document.getElementById("registerEmail").value.trim();
    const phone=document.getElementById("registerPhone").value.trim();
    const password=document.getElementById("registerPassword").value.trim();
    const confirmPassword=document.getElementById("registerConfirm").value.trim();

    const nameRegex=/^[A-Za-z\s]{3,30}$/;
    const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex=/^(05|06|07)[0-9]{8}$/;
    const passwordRegex=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

    if(!nameRegex.test(name)){
        alert("Invalid name");
        return;
    }

    if(!emailRegex.test(email)){
        alert("Invalid email");
        return;
    }

    if(!phoneRegex.test(phone)){
        alert("Invalid phone number");
        return;
    }

    if(!passwordRegex.test(password)){
        alert("Password must contain letters and numbers");
        return;
    }

    if(password!==confirmPassword){
        alert("Passwords do not match");
        return;
    }

    let users=JSON.parse(localStorage.getItem("users")) || [];

    const existingUser=users.find(user=>user.email===email);

    if(existingUser){
        alert("Email already exists");
        return;
    }

    const newUser={
        name:name,
        email:email,
        phone:phone,
        password:password
    };

    users.push(newUser);

    localStorage.setItem("users",JSON.stringify(users));

    alert("Account created successfully");

    RegisterForm.reset();

    RegisterSection.classList.add("hidden");
    loginSection.classList.remove("hidden");

});

const loginForm=document.getElementById("loginForm");

loginForm.addEventListener("submit",function(e){

    e.preventDefault();

    const loginEmail=document.getElementById("loginEmail").value.trim();

    const loginPassword=document.getElementById("loginPassword").value.trim();



    let users=JSON.parse(localStorage.getItem("users")) || [];

    const foundUser=users.find(user=>
        user.email===loginEmail &&
        user.password===loginPassword
    );

    if(!foundUser){
        alert("Invalid email or password");
        return;
    }
    localStorage.setItem(
        "loggedInUser",
        JSON.stringify(foundUser)
    );
    alert("Login successful");
    window.location.href="../index.html";

});