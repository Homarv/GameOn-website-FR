// function to add classname for dropdown btn list responsive
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
const modalClose = document.querySelector(".close");
const inputFirst = document.querySelector("#first");
const inputLast = document.querySelector("#last");
const inputEmail = document.querySelector("#email");
const inputBirthdate = document.querySelector("#birthdate");
const inputParticipation = document.querySelector("#quantity");
const firstCheckboxLocation = document.querySelector(".checkbox-input")
const inputConditionGeneral = document.querySelector("#checkbox1");

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

//open confirmation modal 
function openConfirmationModal() {

}

// close confirmation modal  
function closeConfirmationModal(){

}

function addMessageError(input){
	input.parentElement.setAttribute("data-error-visible", true)
}

function removeMessageError(input){
	input.parentElement.removeAttribute("data-error-visible", true)
}

// alert for validate First and Last 
function validateName(input) {
	if (input.value.length < 2) {
		addMessageError(input)
	} else {
		removeMessageError(input)
		return true;
	}
}


// alert for validate Email
const regexpEmail =
	/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
function validateEmail() {
	if (inputEmail.value.match(regexpEmail)) {
		removeMessageError(inputEmail)
		return true;
	} else {
		addMessageError(inputEmail)
	}
}

// alert for validate birthdate
function validateBirthdate() {
	today = new Date();
	birthday = new Date(inputBirthdate.value);
	if (isNaN(birthday.getTime()) || today.getTime() < birthday.getTime()) {
		addMessageError(inputBirthdate)
	} else {
		removeMessageError(inputBirthdate)
		return true;
	}
}

// alert for particaption
const regexpNumber = /[0-99]/;

function validateParticipation() {
	if (inputParticipation.value.match(regexpNumber)) {
		removeMessageError(inputParticipation)
		return true;
	} else {
		addMessageError(inputParticipation)
	}
}

// alert for validate Location
function validateLocation() {
	if (document.querySelector('input[name="location"]:checked') === null) {
		addMessageError(firstCheckboxLocation)
	} else {
		removeMessageError(firstCheckboxLocation)
		return true;
	}
}

// alert for validate Location
function validateGeneralCondition() {
	if (inputConditionGeneral.checked === false) {
		addMessageError(inputConditionGeneral)
	} else {
		removeMessageError(inputConditionGeneral)
		return true;
	}
}

// launch submit event
submitBtn.addEventListener("click", validateSubmit);

// alert for validate Submit
function validateSubmit() {
	if (
		validateName(inputFirst) *
			validateName(inputLast) *
			validateEmail() *
			validateBirthdate() *
			validateParticipation() *
			validateLocation() *
			validateGeneralCondition() ===
		1
	){
		closeModal();
		openConfirmation();
	}
}
