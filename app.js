var billAmount = document.querySelector("#bill-amnt");
var cashGiven = document.querySelector("#cash-given");
var checkButton = document.querySelector("#check-btn");
var errorMsg = document.querySelector("#error-msg");
var noOfNotes= document.querySelectorAll(".no-of-notes");

notes=["2000","500","100","50","10","1"];

checkButton.addEventListener("click", function checkReturn(){
    if (billAmount.value>0){
        if(cashGiven.value>0){
            if(cashGiven.value>=billAmount.value){
                var  amountToBeReturn = cashGiven.value-billAmount.value;
                calculateChangeToBeGiven(amountToBeReturn);
                }
                
            else{
                    errorMsg.innerText="Do you wanna wash a plates";
                }
        }
        else{
            errorMsg.innerText="Cash given should be greater than zero";
        }
    }
    else{
        errorMsg.innerText="Bill amount should be greater than zero";
    }
   }
);

function calculateChangeToBeGiven(amountToBeReturn){
    for (var i=0; i<notes.length; i++){
        var numberOfNotes= Math.trunc(amountToBeReturn/notes[i]);
        amountToBeReturn%=notes[i];
        noOfNotes[i].innerText = numberOfNotes;
    }
}




