function radio(){
  var number=localStorage.getItem("number");
 if(number==1811003010627&&document.getElementById('fixed').checked){
    return true;
  }
  else if(number==1811003010629&&document.getElementById('savings').checked){
    return true;
  }
  else if(number==1811003010631&&document.getElementById('current').checked){
    return true;
  }
  else{
    alert("PLEASE CHOOSE VALID ACCOUNT.")
    return false;
  }
}
