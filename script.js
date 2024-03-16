const Imagebox=document.querySelector(".imageqr");
const qrImg=document.querySelector(".qr");
const inputTExt=document.querySelector("input");
 function getqr(){
   if(inputTExt.value.length>0) {
    qrImg.src ="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + inputTExt.value; 
    Imagebox.classList.add("show-img"); 
   }
   else{
    inputTExt.classList.add("error");
    setTimeout(()=>{
        inputTExt.classList.remove("error");
    },1000)
   }
}

