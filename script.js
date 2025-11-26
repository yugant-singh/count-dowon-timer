

let timeInput = document.querySelector("#timeInput");
let display = document.querySelector("#display");
let startBtn = document.querySelector("#startBtn");
let resetBtn = document.querySelector("#resetBtn");
let intv;
startBtn.addEventListener("click", function(){
     clearInterval(intv);
   
   let count = timeInput.value;
    console.log(count);
     intv = setInterval(function () {
        if (count >= 0) {
            display.textContent = count;
            count--;
        }
        else {
            clearInterval(intv);
             display.textContent = "Time’s Up!";
        }

    }, 1000)
})


resetBtn.addEventListener("click" , function(){

    clearInterval(intv);
    display.textContent = "00";
   timeInput.value ="";
})

