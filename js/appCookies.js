function setDataForm(){
    document.cookie = "name=" + document.myForm.name.value;
    document.cookie = "email=" + document.myForm.email.value;
}

function getDataForm(){
    var cookieArray = document.cookie.split(";");
    for(let i = 0;i<cookieArray.length;i++){
        var valueArray = cookieArray[i].split("=")
        console.log(valueArray);
        if(valueArray[0].trim() == 'name'){
            document.myForm.name.value = valueArray[1];   
        }
        if(valueArray[0].trim() == 'email'){
            document.myForm.email.value = valueArray[1];
        }
    }
}
