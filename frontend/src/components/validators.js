function LoginValidator(values) {
  // return ''
  // console.log('loginValidator', values)
  let err = {};
  const email_regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   const password_regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

  if (values.email === "") {
    err.email = "email should not be empty";
  } else if (!email_regex.test(values.email)) {
    err.email = "email Did not match";
  } else {
    err.email = "";
    // console.log("email is good")
  }

//   if (values.password === "") {
//     err.password = "password should not be empty";
//   } else if (!password_regex.test(values.password)) {
//     err.password =
//       "Minimum eight characters, at least one uppercase letter, one lowercase letter and one number";
//   } else {
    err.password = "";
    // console.log("password is good")
//   }

  return err;
}

function RegisterValidator(values) {
  // return ''
  // console.log('registerValidator', values)

  let err = {};
  const email_regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const password_regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

  if (values.username === "") {
    err.username = "username should not be empty";
  }
   else {
    err.username = "";
  }

  if (values.email === "") {
    err.email = "email should not be empty";
  }
   else if (!email_regex.test(values.email)) {
    err.email = "email Did not match";
  } 
  else {
    err.email = "";
    // console.log("email is good")
  }

  if (values.password === "") {
    err.password = "password should not be empty";
  }
   else if (!password_regex.test(values.password)) {
    err.password = "Minimum eight characters, at least one uppercase letter, one lowercase letter and one number";
  } 
    else {
    err.password = "";
    // console.log("password is good")
  }


  if (values.DOB !== "") {
      err.DOB = ''
    }else{
        err.DOB = "Date of Birth should not be empty";
    }
  console.log(values)
  return err;
}

export { LoginValidator, RegisterValidator };
