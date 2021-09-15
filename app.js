var billAmount = document.querySelector("#bill-amnt");
var cashGiven = document.querySelector("#cash-given");
var checkButton = document.querySelector("#check-btn");
var errorMsg = document.querySelector("#error-msg");
var noOfNotes= document.querySelectorAll(".no-of-notes");

notes=["2000","500","100","50","10","1"];

checkButton.addEventListener("click", function checkReturn(){
    hideMessage(); 

    if (Number(billAmount.value>0)){
        if(Number(cashGiven.value>0)){
            if(Number(cashGiven.value)>=Number(billAmount.value)){
                var  amountToBeReturn = Number(cashGiven.value-billAmount.value);
                calculateChangeToBeGiven(amountToBeReturn);
                }
                
            else{
                showMessage("Do you wanna wash a plates");
                }
        }
        else{
            showMessage("Cash given should be greater than zero");
        }
    }
    else{
        showMessage("Bill amount or cash given should be greater than zero");
    }
   }
   
//    refreshPage();
);

function refreshPage(){
    location.reload();
}

function showMessage(msg){
    errorMsg.style.display="block";
    errorMsg.innerText=msg;
}

function  hideMessage(){
    errorMsg.style.display="none";
}

function calculateChangeToBeGiven(amountToBeReturn){
    for (var i=0; i<notes.length; i++){
        var numberOfNotes= Math.trunc(amountToBeReturn/notes[i]);
        amountToBeReturn%=notes[i];
        noOfNotes[i].innerText = numberOfNotes;
    }
}