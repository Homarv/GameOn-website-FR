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
const modalClose = document.querySelector(".close");
const modalConfirmation = document.querySelector(".modal-confirmation");
const modalConfirmationCloseBtns = document.querySelectorAll(
	".modal-confirmation-close-btn"
);
const formData = document.querySelectorAll(".formData");
const submitBtn = document.querySelector(".btn-submit");
const inputFirst = document.querySelector("#first");
const inputLast = document.querySelector("#last");
const inputEmail = document.querySelector("#email");
const inputBirthdate = document.querySelector("#birthdate");
const inputParticipation = document.querySelector("#quantity");
const firstCheckboxLocation = document.querySelector(".checkbox-input");
const inputConditionGeneral = document.querySelector("#checkbox1");

// launch modal form event
modalBtn.forEach((btn) =>
	btn.addEventListener("click", () => launchModal(modalbg))
);

// close modal form event
modalClose.addEventListener("click", () => closeModal(modalbg));

//close confirmation modal
modalConfirmationCloseBtns.forEach((btn) =>
	btn.addEventListener("click", () => closeModal(modalConfirmation))
);

// open modal
function launchModal(modal) {
	modal.style.display = "block";
	document.body.style.position = "fixed";
}

// close modal
function closeModal(modal) {
	modal.style.display = "none";
	document.body.style.position = "";
}

function addMessageError(input) {
	input.parentElement.setAttribute("data-error-visible", true);
}

function removeMessageError(input) {
	input.parentElement.removeAttribute("data-error-visible");
}

// function to check First and Last
function validateName(input) {
	const name = input.value.trim(); // Supprime les espaces avant et après le nom
	const regex = /^[a-zA-Z]+$/; // uniquement des lettres
	if (name.length < 2 || !regex.test(name)) {
		addMessageError(input);
	} else {
		removeMessageError(input);
		return true;
	}
}

// afunction to check Email
function validateEmail() {
	const regexpEmail =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (inputEmail.value.match(regexpEmail)) {
		removeMessageError(inputEmail);
		return true;
	} else {
		addMessageError(inputEmail);
	}
}

// function to check birthdate
function validateBirthdate() {
	today = new Date();
	birthday = new Date(inputBirthdate.value);
	if (isNaN(birthday.getTime()) || today.getTime() < birthday.getTime()) {
		addMessageError(inputBirthdate);
	} else {
		removeMessageError(inputBirthdate);
		return true;
	}
}

// function to check particaption
function validateParticipation() {
	const regexpNumber = /[0-99]/;
	if (inputParticipation.value.match(regexpNumber)) {
		removeMessageError(inputParticipation);
		return true;
	} else {
		addMessageError(inputParticipation);
	}
}

// function to check Location
function validateLocation() {
	if (document.querySelector('input[name="location"]:checked') === null) {
		addMessageError(firstCheckboxLocation);
	} else {
		removeMessageError(firstCheckboxLocation);
		return true;
	}
}

// function to check General Condition
function validateGeneralCondition() {
	if (inputConditionGeneral.checked === false) {
		addMessageError(inputConditionGeneral);
	} else {
		removeMessageError(inputConditionGeneral);
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
	) {
		closeModal(modalbg);
		launchModal(modalConfirmation);
	}
}
