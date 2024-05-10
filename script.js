const lengthp = document.getElementById("length");
const numbers = document.querySelector("#numbers");
const uppcase = document.querySelector("#uppercase");
const lowcase = document.querySelector("#lowercase");
const symbol = document.querySelector("#symbols");
const passwordInput = document.querySelector(".password");
const copyBtn = document.getElementById("copy");
const generateBtn = document.getElementById("generate");

//Create strings
const uppCaseStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowCaseStr = "abcdefghijklmnopqrstuvwxyz";
const numbersStr = "0123456789";
const stymbolsStr = "~!@#$%^&*_+?";

generateBtn.addEventListener("click", () => {
    //
    let str = '';
    if (uppcase.checked) {
        str += uppCaseStr;
    }
    if (lowcase.checked) {
        str += lowCaseStr;
    }
    if (numbers.checked) {
        str += numbersStr;
    }
    if (symbol.checked) {
        str += stymbolsStr;
    }
    let password = '';
    for (let i = 0; i < lengthp.value; i++) {
        let index = Math.floor(Math.random() * str.length);
        //Functionality how Math.floor and Math.random is work
        // console.log("Index", index);
        // console.log("math.random()", Math.random());
        // console.log("math.randon() * str.length", Math.random() * str.length);
        // console.log("Math.floor(Math.random() * str.length);", Math.floor(Math.random() * str.length));
        password += str[index]
        
    }
    passwordInput.value = password;
});

copyBtn.addEventListener('click', () =>{
    if (passwordInput.value === '') {
        alert("First Generate Password");
    }else{
        passwordInput.select();
        //This command is used to copy password
        document.execCommand('copy');
        alert("Password is copied");
    }
})