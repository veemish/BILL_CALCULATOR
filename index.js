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
   
    //calculate tip//

    var total = (billIng * serviceQual) / numberOfPeople;

    //round to two decimal places
    total = Math.round(total * 100) / 100;

    // next line allowa us to always have two digits after decimal point//

    total = total.toFixed(2);

    //Display the tip//

     document.getElementById("totaltip").style.display = "block";
       document.getElementById("tip").innerHTML = total;

}

// Hide the tip amount on load//
   document.getElementById("totalTip").style.display = "none";
   document.getElementById("each").style.display = "none";

   //click toa call function 
   document.getElementById("calculate").onclick = function(){
       CalculateTip();
   };

   