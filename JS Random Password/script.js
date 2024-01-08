const passwordBox = document.getElementById("password");
const generateBtn = document.getElementById("btn");
const copyPass = document.getElementById("copy");

const passwordLength = 8;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+|/=,.~";

const allChars = upperCase + lowerCase + numbers + symbols;

function createPassword() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password += symbols[Math.floor(Math.random() * symbols.length)];

  while (passwordLength > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passwordBox.value = password;
}

generateBtn.addEventListener("click", () => {
  createPassword();
});

function copyPassword() {
  passwordBox.select();
  document.execCommand("copy");
}

copyPass.addEventListener("click", () => {
  copyPassword();
});
