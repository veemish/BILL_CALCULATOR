function CalculateTip(){
    var  billIng = document.getElementById("billing").value;
    var serviceQual = document.getElementById("serviceQual").value;
    var numberOfPeople = document.getElementById("peoplemt").value;
    //validating input//
    
    if (billIng === "" || serviceQual == 0 ){
        alert ( "Please enter values" );
        return;
    }
    //check to see id the input is empty or less than or equal to 1//
    
    if (numberOfPeople === "" || numberOfPeople <= 1) {
        numberOfPeople =1;
        document.getElementById("each").style.display = "none";
    
    } else {
       document.getElementById("each").style.display = "block"; 
    }

    
}