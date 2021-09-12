var billAmount = document.querySelector("#bill-amnt");
var cashGiven = document.querySelector("#cash-given");
var checkButton = document.querySelector("#check-btn");
var errorMsg = document.querySelector("#error-msg");

checkButton.addEventListener("click", function checkReturn(){
    if (billAmount.value>0){
        if(cashGiven.value>0){
            if(cashGiven.value>=billAmount.value){
                let amountToBeReturn = cashGiven.value-billAmount.value;
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





