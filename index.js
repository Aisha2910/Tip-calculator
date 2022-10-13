let bill = document.querySelector('#bill-input');
let people = document.querySelector('#people-count-input');
let btnsGrid = document.querySelectorAll('.btns-grid button');
let tipElement = document.querySelector('.tip-el');
let totalElement = document.querySelector('.total-el');
let errorMsg = document.querySelector('.error');
let resetBtn = document.querySelector('.reset-btn');
let customBtn = document.querySelector('.custom');
let amount;


// console.log(Number(people.value));

for (let x of btnsGrid){
    x.addEventListener('click',()=>{
        let percent = x.textContent;
        
        switch (percent){
           
            case "5%":
                amount = (calcTip(5));
                break;

            case "10%":
                amount = (calcTip(10));
                break;

            case "15%":
                amount = (calcTip(15));
                break;

            case "25%":
                amount = (calcTip(25));
                break;

            case "50%":
                amount = (calcTip(50));
                break;

             
        }
        

        
        if (Number(people.value) === 0) {
            errorMsg.textContent = "Can't be zero";
            people.classList.add('error-outline');
        }
        else{
            errorMsg.textContent = " ";
            people.classList.remove('error-outline');
        
        }


        if (amount > 0){
            tipElement.textContent = tipElement.textContent.slice(0,1) + amount;
        }
        if(bill.value != 0 && people.value != 0 ) {
            let totalCalc =  Number(bill.value) / Number(people.value);
            let totalCalcPerPerson = totalCalc + Number(tipElement.textContent.slice(1));
            totalElement.textContent = totalElement.textContent.slice(0,1) + totalCalcPerPerson.toFixed(2);

        }
        


        
    });
   

   
}


customBtn.addEventListener('keyup',(e)=>{
    amount = calcTip(Number(e.target.value))

    if (Number(people.value) === 0) {
        errorMsg.textContent = "Can't be zero";
        people.classList.add('error-outline');
    }
    else{
        errorMsg.textContent = " ";
        people.classList.remove('error-outline');
    }


    if (amount > 0){
        tipElement.textContent = tipElement.textContent.slice(0,1) + amount;
    }
    
    if(bill.value != 0 && people.value != 0 ) {
        let totalCalc =  Number(bill.value) / Number(people.value);
        let totalCalcPerPerson = totalCalc + Number(tipElement.textContent.slice(1));
        totalElement.textContent = totalElement.textContent.slice(0,1) + totalCalcPerPerson.toFixed(2);
    }
});
// customBtn.addEventListener('click',()=>{
//     amount = (calcTip(Number(customBtn.value)
//     );



 
const calcTip = num => {
    
    if (bill.value != 0 && people.value != 0 ){
        let tipAmount =  Number(bill.value) *  (num/100);
        let person = Number(people.value);
        return (tipAmount/person).toFixed(2)
    }
}
resetBtn.addEventListener('click',()=>{
   let initial = '$0.00'
   tipElement.textContent = initial;
   totalElement.textContent = initial;
   people.value = '';
   bill.value = '';
   customBtn.value = '';
})
