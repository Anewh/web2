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






























// function popupOpen(){
// document.getElementById("your-id").addEventListener("click", function () {
//     document.getElementById('popup').classList.add('open');
//       form.submit();
// });
// }

// const popupLinks = document.querySelectorAll('.open-modal-win')
// const body = document.querySelector('body')
// const lockPadding = document.querySelectorAll(".lock-padding")

// let unlock = true;

// const timeout = 800;

// console.log(popupLinks);

// // if(popupLinks > 0 ){
// console.log("метка");	
// for (let index = 0; index < popupLinks.length; index++) {
// 	let popupLink = popupLinks[index];
// 	console.log(popupLink);	
// 	popupLink.addEventListener("click", function(e){
// 		const popupName = popupLink.getAttribute('href').replace('#', '');	
// 		const currentPopup = document.getElementById(popupName);
// 		popupOpen(currentPopup);
// 	});
// }

// //popupLinkconsole.log(popupLink); 
// // const popupCloseIcon = document.querySelectorAll('.close-popup');
// // if(popupCloseIcon.letgth > 0){
// // 	for (let i = 0; i < popupCloseIcon.length; i++) {
// // 		const el = popupCloseIcon[i];
// // 		el.addEventListener('click', function(e){
// // 			popupClose(el.closest(".popup"));
// // 		});
// // 	}
// // }


// function popupOpen(currentPopup){
// 	if(currentPopup && unlock){
// 		const popupActive = document.querySelector('.popupOpen');
// 		if(popupActive){
// 			popupClose(popupActive, false);
// 		}else{
// 			bodyLock();
// 		}
// 		currentPopup.classList.add('open');
// 		currentPopup.addEventListener("click", function(e){
// 			if(!e.target.closest('.popup__content')){
// 				// popupClose(e.target.closest('.popup'));
// 			}
// 		});
// 	}
// }

//  function bodyLock(){
//  	const lockPaddingValue = window.innerWidth-document.querySelector('.wrapper').offsetWidth + 'px';
//  	for(let index = 0; index<lockPadding.length;index++){
//  		const el = lockPadding[index];
//  		el.style.paddingRight = lockPaddingValue;
//  	}
//  	body.style.paddingRight = lockPaddingValue;
//  	body.classList.add('lock');

//  	unlock = false;
//  	setTimeOut(function(){
//  		unlock = true;
//  	}, timeout);
//  }


// // function bodyUnLock(){
// // 	setTimeout(function(){
// // 		for(let index = 0; index<lockPadding.length;index++){
// // 			const el = lockPadding[index];
// // 			el.style.paddingRight = '0px';
// // 		}
// // 		body.style.paddingRight = '0px';
// // 		body.classList.remote('lock');
// // 	})

// // }
