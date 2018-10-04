

function validar_login() {

	var email = document.getElementById('login_email').value ;
	var password = document.getElementById('login_password').value ;
	email = email.trim();
	password = password.trim();

	emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if( !emailRegex.test( email ) ) {
		alert('Ingrese el correo electrónico.');
		document.getElementById('login_email').focus();
		return false;
	}

	if( !(password.length > 6) ){
		alert('Ingrese un password de al menos 6 caractéres.');
		document.getElementById('login_password').focus();
		return false;
	}

	alert('Buen trabajo.');
	return false;
}



function validar_registro() {

	var name = document.getElementById('register_name').value ;
	var phone = document.getElementById('register_phone').value ;
	var email = document.getElementById('register_email').value ;
	var password = document.getElementById('register_password').value ;
	var password2 = document.getElementById('register_password2').value ;
	name = name.trim();
	phone = phone.trim();
	email = email.trim();
	password = password.trim();
	password2 = password2.trim();

	if( !(name.length > 2) ){
		alert('Por favor ingrese su nombre.');
		document.getElementById('register_name').focus();
		return false;
	}

	numRegex = /^([0-9])*$/;
	if ( !( phone.length > 2 && numRegex.test(phone) ) ){
	//if( !(phone.length > 2) ){	
		alert('Por favor ingrese su teléfono.');
		document.getElementById('register_phone').focus();
		return false;
	}

	emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if( !emailRegex.test( email ) ) {
		alert('Por favor ingrese su correo electrónico.');
		document.getElementById('register_email').focus();
		return false;
	}

	if( !(password.length >= 6) ){
		alert('Por favor ingrese un password de al menos 6 caractéres.');
		document.getElementById('register_password').focus();
		return false;
	}

	if( !(password === password2 ) ){
		alert('Las contraseñas no coinciden.');
		document.getElementById('register_password2').focus();
		return false;
	}

	alert('Buen trabajo.');
	return false;
}