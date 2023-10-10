
var audiow = new Audio("sounds/tom-1.mp3");
var audioa = new Audio("sounds/tom-2.mp3");
var audios = new Audio("sounds/tom-3.mp3");
var audiod = new Audio("sounds/tom-4.mp3");
var audioj = new Audio("sounds/snare.mp3");
var audiok = new Audio("sounds/crash.mp3");
var audiol = new Audio("sounds/kick-bass.mp3");

function soundPlayer (letterSelector) {
    if (letterSelector === "w" || letterSelector === "a" || letterSelector === "s" ||letterSelector === "d" ||letterSelector === "j" ||letterSelector === "k" ||letterSelector === "l"){
        console.log(letterSelector);
        eval("audio"+letterSelector).play();
    } else {
        console.log("unvalid key, valid key: w,a,s,d,j,k,l");
    }   
}


for (i=0; i<7; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        
        soundPlayer (this.innerHTML);
        changeButtonStyle(this.innerHTML);
    })
}

function changeButtonStyle(selectedLetter){
    document.querySelector("."+ selectedLetter).classList.toggle("pressed");
    setTimeout(function(){document.querySelector("."+ selectedLetter).classList.toggle("pressed");},300)
}

document.addEventListener("keydown", function(event){
   
   soundPlayer (event.key);

    changeButtonStyle(event.key);
})


