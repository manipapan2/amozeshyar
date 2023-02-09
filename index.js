var nameLabel = document.getElementById("nameLabel")
var nameInput = document.getElementById("nameInput")
var passLabel = document.getElementById("passLabel")
var passInput = document.getElementById("passInput")
var eye = document.getElementById("eye")
var khat = document.getElementById("khatEye")
var si = document.getElementById("si")


nameInput.addEventListener("focus", function () {
    nameLabel.style.fontSize="13px"
    nameLabel.style.top="-37"
    nameLabel.style.color="#0077B6"
  });
  
  nameInput.addEventListener("blur", function () {
    if(nameInput.value == ""){
        nameLabel.style.fontSize="14px"
        nameLabel.style.top="-17"
        nameLabel.style.color="black"
    }
    else{
        nameLabel.style.fontSize="13px"
        nameLabel.style.top="-37"
        nameLabel.style.color="#0077B6"
    }
  });

  passInput.addEventListener("focus", function () {
    passLabel.style.fontSize="13px"
    passLabel.style.top="-37"
    passLabel.style.color="#0077B6"
  });
  
  passInput.addEventListener("blur", function () {
    if(passInput.value == ""){
        passLabel.style.fontSize="14px"
        passLabel.style.top="-17"
        passLabel.style.color="black"
    }
    if(passInput.value == ""){
        si.style.display="none"
    }
    else{
        passLabel.style.fontSize="13px"
        passLabel.style.top="-37"
        passLabel.style.color="#0077B6"
    }
  });

  nameInput.addEventListener("keyup",()=>{
    if(nameInput.value == "mm" && window.innerWidth > 768){
        document.querySelector("body").style.backgroundColor="#602dfa"
    }
    if(nameInput.value != "mm" && window.innerWidth > 768){
        document.querySelector("body").style.backgroundColor="#0077B6"
    }
  })

  window.addEventListener("resize", () => {
    if (window.innerWidth < 768) {
        document.querySelector("body").style.backgroundColor = "white";
    }

    if (window.innerWidth > 768) {
        document.querySelector("body").style.backgroundColor = "#0077B6";
    }
});

  passInput.addEventListener("keyup",()=>{
    if(passInput.value != ""){
        si.style.display="flex"
    }

    if(passInput.value == ""){
        si.style.display="none"
    }
  })

eye.addEventListener("click",ey)

var eyec = 0

function ey(){
    var gg = eyec++
    var ggg = eyec % 2
    if(ggg == 0){
        khat.style.width="20px"
        khat.style.transform = "translateX(-5px) rotate(45deg) translateY(20px)"
        passInput.type="password"
    }
    if(ggg == 1){
        khat.style.width="0px"
        khat.style.transform = "translateX(-5px) rotate(45deg) translateY(13px)"
        passInput.type="text"
    }
}