window.onload = function(){ 

  function play(){
       var audio = document.getElementById("audio");
       audio.play();
  }
  
  // Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var myBtnError = document.getElementById("myBtnError");
var myBtnKarolis = document.getElementById("myBtnKarolis");
var myBtnVidas = document.getElementById("myBtnVidas");
var myBtnLisa = document.getElementById("myBtnLisa");
var myBtnMarshall = document.getElementById("myBtnMarshall");
var myBtnSam = document.getElementById("myBtnSam");
var myBtnNiko = document.getElementById("myBtnNiko");
var myBtnGummy = document.getElementById("myBtnGummy");
var myBtnErin = document.getElementById("myBtnErin");

// Get the <span> element that closes the modal
var span = document.getElementById("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
    document.getElementById("modal-body").innerText = "you have no products in your shopping basket.";
};

myBtnError.onclick = function() {
    modal.style.display = "block";
    document.getElementById("modal-body").innerText = "ERROR ERROR ERROR";
};

myBtnKarolis.onclick = function() {
    modal.style.display = "block";
    document.getElementById("modal-body").innerText = "ERROasdasdasdOR";
};

myBtnVidas.onclick = function() {
    modal.style.display = "block";
    document.getElementById("modal-body").innerText = "ERasdfasdfasdfas";
};

myBtnLisa.onclick = function() {
    modal.style.display = "block";
    document.getElementById("modal-body").innerText = "Edfasdasdfasdfasdfasdfasdf";
};

myBtnMarshall.onclick = function() {
    modal.style.display = "block";
    document.getElementById("modal-body").innerText = "ERa46a46ca467a4f6a46RROR";
};

myBtnSam.onclick = function() {
    modal.style.display = "block";
    document.getElementById("modal-body").innerText = "ERRhb56ef3w45672f426OR";
};

myBtnNiko.onclick = function() {
    modal.style.display = "block";
    document.getElementById("modal-body").innerText = "E43f76345624356246g256";
};

myBtnGummy.onclick = function() {
    modal.style.display = "block";
    document.getElementById("modal-body").innerText = "ER23d456234g52456243h63645RROR";
};

myBtnErin.onclick = function() {
    modal.style.display = "block";
    document.getElementById("modal-body").innerText = "ER34g75bn454hg4356R";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

};