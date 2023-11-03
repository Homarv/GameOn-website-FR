function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const submitBtn = document.querySelector(".btn-submit");
const modalClose = document.querySelector('.close');
const inputFirst = document.querySelector('#first');
const alertFirst = document.querySelector('.alert-first');
const inputLast = document.querySelector('#last');
const alertLast = document.querySelector('.alert-last');
const inputEmail = document.querySelector('#email');
const alertEmail = document.querySelector('.alert-email');
const inputBirthdate = document.querySelector('#birthdate');
const alertBirthdate = document.querySelector('.alert-birthdate');
const inputParticipation = document.querySelector("#quantity");
const alertParticipation = document.querySelector('.alert-participation');
const alertLocation = document.querySelector('.alert-location');
const inputConditionGeneral = document.querySelector('#checkbox1') 
const alertConditionGeneral = document.querySelector('.alert-condition-general') 


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
modalClose.addEventListener("click", closeModal);

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

///CONSIGNES 
///Après une validation réussie, inclure un message de confirmation de la 
///soumission réussie pour l'utilisateur (ex. "Merci ! Votre réservation a été reçue.")
/// TRADUCTION
    /// si => all case are ok 
    /// alert => "Merci ! Votre réservation a été reçue."

// alert for validate First
function validateFirst(){  
  if (inputFirst.value.length < 2 ){
    alertFirst.style.display="block";
  }
  else {
    alertFirst.style.display="none";  
    return true ;
} 
}

// alert for validate Last
function validateLast(){  
  if (inputLast.value.length < 2 ){
    alertLast.style.display="block";
  }
  else {
    alertLast.style.display="none";  
    return true;
} 
}

// alert for validate Email

const regexpEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
function validateEmail(){  
  if (inputEmail.value.match(regexpEmail) ){    
    alertEmail.style.display="none"; 
    return true; 
  }
  else {
    alertEmail.style.display="block";
} 
}

// alert for validate birthdate
function validateBirthdate(){  
  today = new Date()
  birthday = new Date(inputBirthdate.value)
  if (isNaN(birthday.getTime()) || today.getTime() < birthday.getTime()){
    alertBirthdate.style.display="block";
  }
  else {
    alertBirthdate.style.display="none";  
    return true;
} 
}

// alert for particaption
const regexpNumber = /[0-99]/;

function validateParticipation(){  
  if (inputParticipation.value.match(regexpNumber)){    
    alertParticipation.style.display="none";  
    return true;
  }
  else {
    alertParticipation.style.display="block";
} 
}

// alert for validate Location
function validateLocation(){  
  if (document.querySelector('input[name="location"]:checked')=== null ){
    alertLocation.style.display="block";
  }
  else {
    alertLocation.style.display="none";  
    return true;
} 
}

// alert for validate Location
function validateGeneralCondition(){  
  if (inputConditionGeneral.checked === false ){
    alertConditionGeneral.style.display="block";
  }
  else {
    alertConditionGeneral.style.display="none";  
    return true;
} 
}

// launch submit event 
submitBtn.addEventListener("click", validateSubmit);


// alert for validate Submit
function validateSubmit(){  
  if (validateFirst()*
  validateLast()*
  validateEmail()*
  validateBirthdate()*
  validateParticipation()*
  validateLocation()*
  validateGeneralCondition() === 1)
  {
    closeModal()
    window.alert("Merci ! Votre réservation a été reçue.")
  }
}

//// CONSIGNE 
/////Des messages d'erreur spécifiques doivent apparaître sous l'entrée qui n'est pas correcte. Les messages d'erreur doivent s'afficher sous le champ de saisie associé. Exemples :
///"Veuillez entrer 2 caractères ou plus pour le champ du nom."
///"Vous devez choisir une option."
///"Vous devez vérifier que vous acceptez les termes et conditions."
///"Vous devez entrer votre date de naissance."

////TRADUCTION 

//// TANT QUE "NOM"> 2 caractères
//// Modal reste ouverte 
//// add en dessous afficher => "Veuillez entrer 2 caractères ou plus pour le champ du nom.