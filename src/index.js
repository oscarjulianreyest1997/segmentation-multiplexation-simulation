function getMessage(){
    let txt = document.getElementById("message").value;
    if(txt == ""){
        alert("Ingresa un mensaje");
    }else{
        transforBinary(txt);
    }
}

function transforBinary(txt){
    //ASCII/UTF-8
    let binary = "";
    for (let i = 0; i < txt.length; i++) {
        binary +=txt[i].charCodeAt(0).toString(2) + " ";
   }
   document.getElementById('messageBin').value = binary;
   document.getElementById('btnCopy').disabled = false;
}

function copyText() {
    /* Get the text field */
    var copyText = document.getElementById("messageBin");
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
     /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);
}