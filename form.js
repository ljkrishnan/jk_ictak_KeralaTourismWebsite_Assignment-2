// Signin/SignUp Page email & Password Validation Starts
let email=document.getElementById("emailId");
let pwd=document.getElementById("pwdId");
let cpwd=document.getElementById("cpwdId");
let mobempty=document.getElementById("MobNo");
let error=document.getElementById("errorId");
let regexp=/^([A-Za-z0-9\.\-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/

// Signin Page email & Password Validation Starts
function validationSin() {                                        //Basic Validation Starts
    if(email.value.trim()==""||pwd.value.trim()==""){         //trim() function to eleminate white spaces before and after text
        alert("Fields marked ' * ' Cannot Be Empty"); 
        return false;
    }
    else if(regexp.test(emailId.value)){
        error.innerHTML = "<b>Valid</b>";
        error.style.color = "black";
        // alert("Valid Email ID"); 
        return true;
            }
    else{
        // alert("Invalid Email ID");
        error.innerHTML = "<b>Invalid Email ID. Please Retry.</b>";
        error.style.color = "orange"; 
        return false;
       
    }                                                          //Basic Validation Ends
    
}
// Signin Page email & Password Validation Ends

// SignUp Page email & Password Validation Starts
function validation() {                                        //Basic Validation Starts
    if(email.value.trim()==""||pwd.value.trim()==""||cpwd.value.trim()==""||mobempty.value.trim()==""){         //trim() function to eleminate white spaces before and after text
        alert("Fields marked ' * ' Cannot Be Empty"); 
        return false;
    }
    else if(regexp.test(emailId.value)){
        error.innerHTML = "<b>Valid</b>";
        error.style.color = "black";
        // alert("Valid Email ID"); 
        return true;
            }
    else{
        // alert("Invalid Email ID");
        error.innerHTML = "<b>Invalid Email ID. Please Retry.</b>";
        error.style.color = "orange"; 
        return false;
    } 
}
// SignUp Page email & Password Validation Ends

// Signin/SignUp Page email & Password Validation Ends

// SignUp Page mobile no Validation Starts

let mob=document.getElementById("MobNo");
let mobRegexp=/^([0-9]{3})([\ \.\-]+)?([0-9]{3})([\ \.\-]+)?([0-9]{4})$/
let merror=document.getElementById("merrorId");

function mobvalidation() {  

    if (mobRegexp.test(mob.value)){
        merror.innerHTML = "<b>Valid</b>";
        merror.style.color = "black";
        // alert("Valid Mobile Number");
        return true;
    }
    else{
        merror.innerHTML = "<b>Invalid Mobile No.</b>";
        merror.style.color = "orange"; 
        return false;
        
    }
  
}

// SignUp Page mobile no Validation Ends



// SignUp Page Password Format Validation Starts

let pwdver=document.getElementById("pwdId");
//  let pwdRegexp=/^([0-9]{3})([\ \.\-]+)?([0-9]{3})([\ \.\-]+)?([0-9]{4})$/
let pwdRegexp=/^([A-Z]+)([a-z]+)([0-9]+)$/
let perror=document.getElementById("perrorId");


function pwdvalidation() { 
    
    if(pwdver.value.length < 8){
        perror.innerHTML = "<b>Atleast 8 character</b>";
        perror.style.color = "orange";
        return false;
    }

    else if(pwdRegexp.test(pwdver.value)){
        perror.innerHTML = "<b>Valid</b>";
        perror.style.color = "black";
        // alert("Valid Mobile Number");
        return true;
    }
    else{
        perror.innerHTML = "<b>Invalid Format.</b>";
        perror.style.color = "orange";
        alert("Password must be atlease 8 character long, also contain atleast one uppercase letter, one lowercase letter & one number."); 
        return false;
        
    }
  
}
// SignUp Page Password Format Validation Ends

// SignUp Page Password & confirm Password Validation Starts

function pwdmismatch(){
    if(pwd.value == cpwd.value){
        return true;
    }          

    else{
        alert("Password mismatch");
        return false;
    }
}
// SignUp Page Password & confirm Password Validation Ends


// Password Meter Starts
let textDisp=document.getElementById("meterText");
let meterBody=document.getElementById("meterEmpty");
// let meterRegexp1=/^([A-Z]+)([a-z]+)([0-9]+)$/
let regExpWeak = /[a-z]/;
let regExpMedium = /\d+/;
let regExpStrong = /.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/;

function trigger(){
    if(regExpStrong.test(pwd.value) & pwdver.value.length > 10){
        textDisp.innerHTML = "<b>STRONG</b>";
        textDisp.style.color = "black";
        meterBody.style.background = "green";
        return true;
    }
    else if(regExpMedium.test(pwd.value) & pwdver.value.length > 8){
        textDisp.innerHTML = "<b>MEDIUM</b>";
        textDisp.style.color = "black";
        meterBody.style.background = "orange";
        return true;
    }
    else if(regExpWeak.test(pwd.value)){
        textDisp.innerHTML = "<b>WEAK</b>";
        textDisp.style.color = "black";
        meterBody.style.background = "RED";
        return true;
    }
    else{
        textDisp.innerHTML = "<b>Password Strength Meter</b>";
        textDisp.style.color = "black";
        meterBody.style.background = "grey";
        return true;
    }
}

// Password Meter Ends