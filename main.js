function validate(){
var number = document.getElementById("txt");
  //document.forms["acc_no"]["account_no"];
  localStorage.setItem("number",number.value);
  if (number.value != 1811003010627 && number.value !=1811003010629 && number.value !=1811003010631 )
      {
          window.alert("Please enter valid account number.");
          number.focus();
          return false;
      }
  return true;
}
