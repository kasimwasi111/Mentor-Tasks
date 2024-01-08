const passwordBox = document.getElementById("password");
const generateBtn = document.getElementById("btn");
const copyPass = document.getElementById("copy");

const passwordLength = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+|/=,.~";

const allChars = upperCase + lowerCase + numbers + symbols;

function createPassword() {
  let password = "";
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
