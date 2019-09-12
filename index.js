function CalculateTip(){
    var  billIng = document.getElementById("billing").value;
    var serviceQual = document.getElementById("serviceQual").value;
    var numberOfPeople = document.getElementById("peoplemt").value;
    //validating input//
    
    if (billIng === "" || serviceQual == 0 ){
        alert ( "Please enter values" );
        return;
    }
}