function validate_form(){
    var name=document.getElementById("name").value;
    var phone=document.getElementById("phone").value;
    var email=document.getElementById("email").value;
    var pincode=document.getElementById("pincode").value;
    var error_message=document.getElementById("error_message");

    error_message.style.padding="10px";

    var text;
    if(name.length<3){
        text="Please Enter a valid Name";
        error_message.innerHTML = text;
        return false;
    }
    if(isNaN(phone) || phone.length !=10){
        text="Please Enter a valid Phone Number";
        error_message.innerHTML=text;
        return false;
    }
    if(isNaN(pincode) || pincode.length !=10){
        text="Please enter a valid Pincode";
        error_message.innerHTML=text;
        return false;
    }
    if(email.indexof("@") == -1 || email.length < 6){
        text="Please enter a valid E-mail ID.";
        error_message.innerHTML=text;
        return false;
    }
}