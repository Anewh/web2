var openModalWindow = document.getElementById('sign-in'),
    closeModalWindow = document.getElementById('popup-close'),
    chooseToSignIn = document.getElementById('sign-in-form-btn'),
    chooseToSignUp = document.getElementById('sign-up-form-btn');

// Отслеживаем клик
openModalWindow.addEventListener('click', function() {
  popup.classList.add('open');
  document.getElementById('form-reg').classList.add('open');
});

closeModalWindow.addEventListener('click', function() {
  document.getElementById('popup').classList.remove('open');
  if(document.getElementById('form-reg').classList.contains('open')){
    document.getElementById('form-reg').classList.remove('open');
  }
  if(document.getElementById('form-in').classList.contains('open')){
    document.getElementById('form-in').classList.remove('open');
  }
});

chooseToSignIn.addEventListener('click', function(){
  if(document.getElementById('form-reg').classList.contains('open')){
    document.getElementById('form-reg').classList.remove('open');
  }
  document.getElementById('form-in').classList.add('open');
});

chooseToSignUp.addEventListener('click', function(){
  if(document.getElementById('form-in').classList.contains('open')){
    document.getElementById('form-in').classList.remove('open');
  }
  document.getElementById('form-reg').classList.add('open');
});

