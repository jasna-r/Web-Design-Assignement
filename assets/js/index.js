function sendSucceessMsg() {
    let x=document.getElementById("send-success-msg");
    x.innerText="Form submitted successfully!";
    return false;
}

function addToCart() {
  let currentNum= document.getElementById("cardHolder").innerHTML;
  let cn=parseInt(currentNum);
  if(cn)
  cn++; else cn=1;
  document.getElementById("cardHolder").innerHTML=cn;
}