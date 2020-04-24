function attempt(){
  var number=localStorage.getItem("number");
  var bal=document.getElementById("ba");
  if(bal.value<20000){
  if(number==1811003010627){
    if(bal.value>10000){
      alert("INSUFFICIENT BALANCE IN YOUR ACCOUNT");
      return false;
    }
  }
else  if(number==1811003010629){
    if(bal.value>15000){
      alert("INSUFFICIENT BALANCE IN YOUR ACCOUNT");
      return false;
  }
}
else if(number==1811003010631){
    if(bal.value>12000){
      alert("INSUFFICIENT BALANCE IN YOUR ACCOUNT");
      return false;
  }
}
}
else{
  alert("You can withdraw upto 20000 using cardless ATM!");
  return false;
}
return true;
}
