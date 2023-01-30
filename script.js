let btn=document.querySelector('#btn')
let input=document.querySelector('#input')
let img=document.getElementById('img')
btn.addEventListener('click',async()=>{
  let inp=input.value;
  let url1=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inp}`
  let data=await fetch(url1);
  img.src=data.url
  input.value=''
})
