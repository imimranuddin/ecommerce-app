// LogIn page

// function to check log in inputs 
function logInCheck() {

  // calls email id value 
  var valueEmailId = document.querySelector('.logInEmail').value;

  // calls password value 
  var valuePasswd = document.querySelector('.logInPass').value;

  // applies if else logic to alert according to the user input 

  // if email is admin@admin.com and password is 123456 both the conditions are true then it will alert 'Login successful'
  if (valueEmailId === 'admin@admin.com' && valuePasswd === '123456') {
    alert("Login successful");
  }

  // if email input field and password input field both are blank then it will alert "Email address and password can't be blank, type your email address and password"
  else if (valueEmailId === '' && valuePasswd === '') {
    alert("Email address or password can't be blank, type your email address and password");
  }

  // if email is other than admin@admin.com and password is other than 123456 then it will alert 'Incorrect email or password'
  else {
    alert("Incorrect email or password");
  }

}

