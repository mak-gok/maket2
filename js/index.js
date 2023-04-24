let btn= document.getElementById("btn-modal")
console.log(btn);
btn.onclick=()=>{
    modal.style.display="flex"
}
let modal= document.getElementById("vraper-modal")
let close= document.getElementById("close")
close.onclick=()=>{
    modal.style.display="none"
}
