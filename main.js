var bill=document.querySelector("#billamount");
var cash=document.querySelector("#cashgiven");
var button=document.querySelector("#btn");
var notes=document.querySelector("#noofNotes"); 

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];


button.addEventListener("click",clickHandler)


function clickHandler(){
    console.log("clicked")
    var m=4;
    
    var b=bill.value;
    var c=cash.value;
    notes[1].innerText=b;
    if(b>c){
        var m="do you wanna get hit"
    }
    else if(c>b){
        
        calculatereturn (b,c)
    }
    else{
        var m="invalid bill amount"
    }
    var returnamount =c-b;
    
}

function calculatereturn(bill , cash){
    var returnamount =cash-bill;
    console.log(returnamount)

    for(let i=0;i<availableNotes.Length;i++){
        var numberofNotes=Math.trunc(returnamount/availableNotes[i]);
        
        returnamount=returnamount%availableNotes[i];

        console.log(returnamount)
        notes[i].innerText=numberofNotes
    }
}

