const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar_menu');
const navLogo = document.querySelector('#navbar_logo');
const line = document.getElementById("line");
const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const line3 = document.getElementById("line3");
const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');

const togglePassword1 = document.querySelector('#togglePassword1');
const confirmpassword = document.querySelector('#confirmpassword');




// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
}

// --------------------------mobile menu-----------------------------------

menu.addEventListener('click', mobileMenu);


// Toggle for eye icon

togglePassword.addEventListener('click', function (e) {
  // toggle the type attribute
  const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
  password.setAttribute('type', type);
  // toggle the eye slash icon
  this.classList.toggle('fa-eye-slash');
});


togglePassword1.addEventListener('click', function (e) {
  // toggle the type attribute
  const type = confirmpassword.getAttribute('type') === 'password' ? 'text' : 'password';
  confirmpassword.setAttribute('type', type);
  // toggle the eye slash icon
  this.classList.toggle('fa-eye-slash');
});
  
togglePassword2.addEventListener('click', function (e) {
  // toggle the type attribute
  const type = password2.getAttribute('type') === 'password' ? 'text' : 'password';
  password2.setAttribute('type', type);
  // toggle the eye slash icon
  this.classList.toggle('fa-eye-slash');
});


// password and confirm password matching

function validate()
{
  var password = document.getElementById("password").value;
  var confirmpassword = document.getElementById("confirmpassword").value;
    

  if(password != confirmpassword)
  {  
    alert("Password do not match");
    return false;
  }
  return true;

}

// -------------------Form section--------------

var modal = document.getElementById('simpleModal');

var modalBtn = document.getElementById('modalBtn');
//close button

var closeBtn = document.getElementsByClassName('closeBtn')[0];

//------------------For open click---------------------
modalBtn.addEventListener('click', openModal);

//-------------For close click-----------------
closeBtn.addEventListener('click', closeModal);

//--------------Funtion for opening modal----------------
function openModal(){
  modal.style.display = 'block'; 
}

//--------------Funtion for closing modal----------------
function closeModal(){
  modal.style.display = 'none'; 
}

 $('.message a').click(function(){
  $('form').animate({height: "toggle", opacity: "toggle"}, "slow" );
});


$(document).ready(function(){
  $('[data-toggle="offcanvas"]').click(function(){
      $("#navigation").toggleClass("hidden-xs");
  });
});
