var form = document.getElementById("reg-form");
var firstName = document.getElementById("first-name");
var lastName = document.getElementById("last-name");
var email = document.getElementById("email");
var password = document.getElementById("psd");
var password_2 = document.getElementById("psd2");
var day = document.getElementById("day");
var month = document.getElementById("month");
var year = document.getElementById("year");
var genderM = document.getElementById("radio1");
var genderF = document.getElementById("radio2");
var genderO = document.getElementById("radio3");
var robot = document.getElementById("checkbox1");

var helpDate = document.getElementById("help-date");
var helpGender = document.getElementById("help-gender");

//var green = '#4CAF50';
var red = '#F44336';
var green = '#32CD32';


//Submit Form
function validateForm() {
	var name = firstName.value;
	if (validateFirstName() && validateLastName() && validateEmail() && validatePassword() && validateConfirmPassword() && validateDay() && validateMonth() && validateYear() && validateGender() && validateRobot()) {
		alert('Your Registration was Successful! Welcome ' + name + '.');
		form.reset();
		return true; // go to action		
	}
	return false;
	
}

//----------NAME Validation-------------------
function validateFirstName() {
	//check if Empty
	if (checkIfEmpty(firstName)) return;
	//Only Letters
	if (!checkIfOnlyLetters(firstName)) return;
	return true;
}

function validateLastName() {
	//check if Empty
	if (checkIfEmpty(lastName)) return;
	//Only Letters
	if (!checkIfOnlyLetters(lastName)) return;
	return true;
}

//----------E-mail---------------------
function validateEmail() {
	if (checkIfEmpty(email)) return;
	if(!containsCharacters(email, 5)) return;
	return true;
}

//----------Password-------------------
function validatePassword() {
	//Empty
	if (checkIfEmpty(password)) return;
	//Lenght
	if (!meetLength(password, 6, 100)) return;
	//Characters
	if (!containsCharacters(password, 2)) return; 
	return true;
}

//-------Confirm-Password---------------
function validateConfirmPassword() {
	//if password is valid
	if (password.className !== 'valid') {
		setInvalid(password_2, "Password must be valid!");
		return;
	}
	//if they match 
	if (password.value !== password_2.value) {
		setInvalid(password_2, "Password doesn't match!");
		return
	}
	else {
		setValid(password_2);
		return true;
	}
}

//------------Birthday---------------
function validateDay() {
	if (checkDate(day)) return;
	return true;  
}

function validateMonth() {
	if (checkDate(month)) return;
	return true;  
}

function validateYear() {
	if (checkDate(year)) return;
	return true;  
}

//------------Gender-----------------
function validateGender() {
	if (genderM.checked == false && genderF.checked == false && genderO.checked == false) {
		helpGender.innerHTML = "Please, choose your gender!";
		helpGender.style.opacity = 1;
		helpGender.style.color = red;
		return false;
	}
	return true;
}

//------------Robot-------------------
function validateRobot() {
	if (checkRobot()) {		
		return true;
	}
	return false;
}



//---------Other----Functions--------------------


function checkIfEmpty(field) {
	if (isEmpty(field.value.trim())) {
		//set field Invalid
		setInvalid(field, field.name + ' must not be empty!');
		return true;
	}
	else {
		//set field Valid
		setValid(field);
		return false;
	}
}

function checkIfOnlyLetters(field) {
	if (/^[a-zA-Z]+$/.test(field.value)) {
		setValid(field);
		return true;
	}
	else {
		setInvalid(field, field.name + ' must contain only letters')
		return false;
	}
}

function isEmpty(value) {
	if (value === '') return true;
	return false;
}


function setInvalid (field, message) {
	field.className = 'invalid';
	field.nextElementSibling.innerHTML = message;
	field.nextElementSibling.style.color = red;
	field.nextElementSibling.style.opacity = 1;
	field.style.borderColor = red;
}

function setValid(field) {
	field.className = 'valid';
	field.nextElementSibling.innerHTML = '.';
	field.nextElementSibling.style.opacity = 0;
	field.style.borderColor = green;
}


function meetLength(field, minLength, maxLength) {
	if (field.value.length >= minLength && field.value.length < maxLength){
		setValid(field);
		return true;
	}
	else if (field.value.length < minLength) {
		setInvalid(field, field.name + " must be at least " + minLength + " characters long!");
		return false;
	}
	else {
		setInvalid(field, field.name + " must be less than" + maxLength + " characters!")
		return false;
	}
}

function containsCharacters(field, code) {
	var regEx;
	switch (code) {

		//letters
		case 1:
			regEx = /(?=.*[a-zA-Z])/;
			return matchWithRegEx(regEx, field, "Must contain at least one letter!");
		//letters and numbers
		case 2:
			regEx = /(?=.*\d)(?=.*[a-zA-Z])/;
			return matchWithRegEx(regEx, field, "Must contain letters and numbers!");
		//uppercase, lowercase, number
		case 3:
			regEx = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/;
			return matchWithRegEx(regEx, field, "Must contain at least one lowercase letter, one uppercase letter and one number!");
		// uppercase, lowercase, number and special char
		case 4:
     		 regEx = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/;
      		return matchWithRegEx(regEx, field, 'Must contain at least one lowercase letter, one uppercase, one number and one special character'
      );
      	case 5:
      		regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			return matchWithRegEx(regEx, field, "E-mail is not valid!")
		default:
			return false;
	}
}

function matchWithRegEx(regEx, field, message) {
	if (field.value.match(regEx)) {
		setValid(field);
		return true;
	}
	else {
		setInvalid(field, message);
		return false;
	}
}


function checkDate(field) {
	if (field.selectedIndex == 0) {
		field.className = 'invalid';
		helpDate.innerHTML = "Please, use correct date!";
		helpDate.style.color = red;
		helpDate.style.opacity = 1;
		return true;
	}
	else {
		field.className = 'valid';
		helpDate.innerHTML = '.';
		helpDate.style.opacity = 0;
		return false;
	}
}


function checkGender() {
	if (genderM.checked == true || genderF.checked == true || genderO.checked == true) {
		helpGender.style.opacity = 0;
	}
}

function checkRobot() {
	if (robot.checked == true) {
		robot.className = 'chb-input valid';
		robot.nextElementSibling.style.color = '#000';
		return true;
	}	
	else {
		robot.className = 'chb-input invalid';
		robot.nextElementSibling.style.color = red;
		return false;
	}
}