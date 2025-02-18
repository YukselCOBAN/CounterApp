let plus=document.getElementById("plus");
let reset=document.getElementById("reset");
let minus=document.getElementById("minus");
let output=document.getElementById("result");

let score=0;

plus.addEventListener("click",()=>{
    score++;
    output.innerHTML=score;
    if(score>=1)
    {
        output.style.color="green";
    }
    else if(score==0)
    {
        output.style.color="white"; /*başta zaten beyaz ama geri 0 olunca yeniden beyaz olması için*/
    }

})

minus.addEventListener("click",()=>{
    score--;
    output.innerHTML=score;
    if(score<0)
    {
        output.style.color="red";
    }
    else if(score==0)
    {
        output.style.color="white"; /*başta zaten beyaz ama geri 0 olunca yeniden beyaz olması için*/
    }
    
})


reset.addEventListener("click",()=>{
   score=0;
   output.innerHTML=score;
   output.style.color="white";  
})
