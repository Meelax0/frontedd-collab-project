const loginSection=document.querySelector(".Login-auth");
const RegisterSection=document.querySelector(".register-auth");

const showRegister=document.getElementById("ShowRegister");
const showLogin=document.getElementById("ShowLogin");

showRegister.addEventListener('click',function(e){
    e.preventDefault();
    loginSection.classList.add('hidden');
    RegisterSection.classList.remove('hidden');
});
showLogin.addEventListener('click', function(e){
    e.preventDefault();
    RegisterSection.classList.add('hidden');
    loginSection.classList.remove('hidden');
})