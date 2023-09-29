export const loginValidation = (data) => {
  let error = {};
  if (!data.username.trim()) {
    error.username = "نام کاربری ضروری است";
  } else {
    delete error.username;
  }
  if (!data.password.trim()) {
    error.password = "رمزعبور ضروری است";
  } else {
    delete error.username;
  }
  return error;
};

export const registerValidation = (data) => {
  let error = {};
  if (!data.email.trim()) {
    error.email = "ایمیل ضروری است";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    error.email = "فرمت ایمیل صحیح نیست";
  } else {
    delete error.email;
  }
  if (!data.password.trim()) {
    error.password = "رمزعبور ضروری است";
  } else if (data.password.length < 8) {
    error.password = "رمز عبور حداقل باید 8 کاراکتر و بیشتر باشد";
  } else {
    delete error.username;
  }
  if (!data.userPhoneNumber) {
    error.userPhoneNumber = "شماره تماس ضروری است";
  } else if (!/^(\+98?)?{?(0?9[0-9]{9,9}}?)$/.test(data.userPhoneNumber)) {
    error.userPhoneNumber = "فرمت شماره موبایل صحیح نیست";
  } else {
    delete error.userPhoneNumber;
  }
  return error;
};
