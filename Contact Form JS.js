function validate(){
    var name=document.getElementById("name").value;
    var phone=document.getElementById("phone").value;
    var email=document.getElementById("email").value;
    var error_message=document.getElementById("error_message");

    error_message.style.padding="10px";

    var text;
    if(name.length<3){
        text="Please Enter the valid name";
        error_message.innerHTML = text;
        return false;
    }
    if(isNaN(phone) || phone.length !=10){
        text="Please Enter the valid phone number";
        error_message.innerHTML=text;
        return false;
    }
    if(email.indexof("@") == -1 || email.length < 6){
        text="Please enter a valid E-mail ID.";
        error_message.innerHTML=text;
        return false;
    }
}