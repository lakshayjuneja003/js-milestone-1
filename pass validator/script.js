function passcheck(){
    const input1=document.getElementById("inputfield1").value
const input2=document.getElementById("inputfield2").value
const message=document.getElementById("demotext")
const button=document.getElementById("subbutton")

if(input1.length!= 0){
    if(input1==input2)
    {
        message.textContent="passwords matched"
        message.style.backgroundColor="#3ae374"
    }
    else{
        message.textContent="passwords did not match"
        message.style.backgroundColor="#ff4d4d"
    }
}
else{
    message.textContent="password can not be empty"
    alert("password cannot be empty")

}
}




