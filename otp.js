function OTP(p){
  var o=document.getElementById("ot");
  if(o.value!=p){
    alert("INVALID OTP");
    return false;
  }
  return true;
}
