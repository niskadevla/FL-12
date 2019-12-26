'use strict';

let email, password;
let lenEmail = 5;
let error;
let userEmail = 'user@gmail.com';
let adminEmail = 'admin@gmail.com';
let userPass = 'UserPass';
let adminPass = 'AdminPass';

//Check login
do {
  email = prompt('Enter your email:', '');
  error = false;

  if (!email) {
    error = true;
    alert('Canceled');
  } else if(email.length < lenEmail) {
    error = true;
    alert('I don\'t know any emails having name length less than 5 symbols');
  } else if(email !== userEmail && email !== adminEmail) {
    error = true;
    alert('I don’t know you');
  }
} while (error);

//Check password
let isMatchPasEmail;

do {
  password = prompt('Enter your Password:', '');
  error = false;

  if(!password) {
    error = true;
    alert('Canceled');
  } else if( !(email === userEmail && password === userPass ||
             email === adminEmail && password === adminPass) ) {
      error = true;
      alert('Wrong password');
  }

} while (error);

isMatchPasEmail = true;

//CHANGE THE PASSWORD
let doChange = confirm('Do you want to change your password?');
let oldPas;
let isMatchOldPas;

  //Match old password
if(!doChange) {
  alert('You have failed the change.');
  isMatchOldPas = false;
} else if(doChange && isMatchPasEmail) {
    do {
      oldPas = prompt('Enter your old password:', '');
      error = false;

      if(!oldPas) {
        error = true;
        alert('Canceled');
      } else if( password !== oldPas ) {
          error = true;
          alert('Wrong password');
      }

    } while (error);

    isMatchOldPas = true;
}

  //Valid new password
let newPassword;
let lenPas = 6;

 if(isMatchOldPas) {
   let error;

   do {
     newPassword = prompt('Enter new password', '');
     error = false;

     if(!newPassword) {
       error = true;
       alert('Canceled');
     } else if(newPassword.length < lenPas) {
       error = true;
       alert('It’s too short password. Sorry.');
     }
   } while (error);

   //Valid new password and password2
   let newPassword_2;

   if(!error) {
     do {
       newPassword_2 = prompt('Enter new password a second time:', '');
       error = false;

       if(newPassword === newPassword_2) {
         error = false;
         password = newPassword;
         alert('You have successfully changed your password');
       } else {
         error = true;
         alert('You wrote the wrong password');
       }
     } while (error);
   }

 }
