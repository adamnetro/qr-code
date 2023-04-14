const textInput = document.querySelector('.itm-qrCode input');
const btn = document.querySelector('.itm-qrCode button')
const boximg = document.querySelector('.itm-qrCode .box-qrCode')


btn.addEventListener('click', () => {
  if(textInput.value){
    boximg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + textInput.value;
    boximg.style.display = "block"
  }
})



textInput.addEventListener('input', () => {
  if(!textInput.value){
    boximg.style.display = "none"
  }
})


