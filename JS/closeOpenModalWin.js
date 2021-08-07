const btnLogin = document.getElementById('BtnLogin');
const btnCloseLogin = document.getElementById('BtnLoginClose');
const LoginModal = document.getElementById('LoginModal');
const overlay = document.getElementById('overlay');

btnLogin.addEventListener ('click',function(){
    overlay.style.display = 'block';
    LoginModal.style.opacity = '1';
    LoginModal.style.top = '50%';
})
btnCloseLogin.addEventListener ('click',function(){
    overlay.style.display = 'none';
    LoginModal.style.opacity = '0';
    LoginModal.style.top = '-50%';
})

const btnRegister = document.getElementById('BtnRegister');
const btnCloseRegister = document.getElementById('BtnRegisterClose');
const RegisterModal = document.getElementById('RegisterModal');

btnRegister.addEventListener ('click',function(){
    overlay.style.display = 'block';
    RegisterModal.style.opacity = '1';
    RegisterModal.style.top = '50%';
})
btnCloseRegister.addEventListener ('click',function(){
    overlay.style.display = 'none';
    RegisterModal.style.opacity = '0';
    RegisterModal.style.top = '-50%';
})