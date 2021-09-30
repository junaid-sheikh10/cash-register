var bill=document.querySelector("#billamount");
var cash=document.querySelector("#cashgiven");
var button=document.querySelector("#btn");
const notes=document.querySelectorAll(".noofNotes");
var out=document.querySelector("#msg");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];


button.addEventListener("click",clickHandler)

out.style.display="none"

function showoutput(message){
    out.style.display="block";
    out.innerText=message;
}

function clickHandler(){
    console.log("clicked")
    
    
    var b=bill.value;
    var c=cash.value;
    if(b>0){
         if(b>c){
             var m="do you wanna get hit"
             showoutput(m)
         }
         else if(c>b){

             calculatereturn (b,c)
         }
         else{
             showoutput("do you want to wash clothes")
         }
         var returnamount =c-b;
    }
    else{
        console.log("Enter valid amount")
        showoutput("invalid amount")
    }
}

function calculatereturn(bill , cash){
    var returnamount =cash-bill;
   // console.log(returnamount)

    for(let i=0;i<availableNotes.length;i++){
        const numberofNotes=Math.trunc(returnamount/availableNotes[i]);
        
        returnamount = returnamount%availableNotes[i];
     //   console.log(i)
        console.log(numberofNotes)
        notes[i].innerText = numberofNotes;
    }
}

