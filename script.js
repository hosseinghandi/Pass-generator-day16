

//defining the inputs 
let passWithEl = document.getElementById("pass-with-el");
let copyEl = document.getElementById("copy-el")
let messageEl = document.getElementById("message-el")
let messageEllen = document.getElementById("message-el-len")
let isAsked = false
let generatedPass  = ""
let generateEl = document.getElementById("generate-el");



generateEl.addEventListener("click", function() {
    let askedLengthPass = document.getElementById("char-length-el").value;

    if (askedLengthPass === "") {
        askedLengthPass = 12
        messageEllen.textContent = "Deafult value is consiered as 12 charach"
        isAsked = true
    } else if (askedLengthPass <= 7){
        isAsked = false
        messageEllen.textContent = "The length you've inserted is not valid\
        the minimum characters length is 8."
        askedLengthPass = 12
    } else if (askedLengthPass >= 41){
        isAsked = false
        messageEllen.textContent = "The length you've inserted is not valid\
        the maximum characters length is 40."}
        else{
            isAsked = true
            messageEllen.textContent = "Password is successfully generted. Please check the text box below"
        }

    generatedPass = getRandomPass(askedLengthPass)
    passWithEl.value = generatedPass
});

copyEl.addEventListener('click', function(){
    if (isAsked === true){
        navigator.clipboard.writeText(passWithEl.value)
        messageEl.textContent = "The generated password is copied!"
    } else {
        messageEl.textContent = "You need to generate your password first!"
    }
    
})


function getRandomPass(askedLengthPass) {
    messageEl.textContent = ""
    if (isAsked ){
        const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V",
            "W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v",
            "w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*",
            "(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
            generatedPass  = "";
        for (i =0; i <askedLengthPass; i++){
            generatedPass += characters[Math.floor(Math.random()*characters.length)];
    } 
} else {
    generatedPass = ""
}
    return generatedPass
}










