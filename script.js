const incrementbtn=document.querySelector("#increment")
const decrementbtn=document.getElementById("decrement")
const countertext=document.getElementById("counter")
let counter=0;


function increment(){
    counter++
    countertext.innerText=counter

}

function decrement(){
    counter--
    if(counter<0){
        alert("you cannot decrement further")
        counter=0;
    }
    countertext.innerText=counter

}

incrementbtn.addEventListener('click',increment)
decrementbtn.addEventListener("click",decrement)



