const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');


form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	
	const usernameValue = username.value.trim();
	const passwordValue = password.value.trim();
	
	
	if(usernameValue === '') {
		setErrorFor(username, 'Name cannot be blank');
    } else if (usernameValue !== "admin"){
        setErrorFor(username, 'Not a valid name');
    }else {
		setSuccessFor(username);
	}
	

	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	} else if(passwordValue !== "12345") {
		setErrorFor(password, 'Not a valid password');
	} else{
		setSuccessFor(password);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
    small.innerText = message;
    
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
	location.replace("main.html");	

}

 