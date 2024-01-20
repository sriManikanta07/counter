const value = document.getElementById("value");

let num = 0;
value.style.fontSize = '20px';

const ibtn = document.querySelector(".increase");
const rbtn = document.querySelector(".reset");
const dbtn = document.querySelector(".decrease");

ibtn.addEventListener("click",function(){
      num+=1;    
  value.textContent = num;
  value.style.fontSize = `${num*20}px` ;
  colorupdate();
});
rbtn.addEventListener("click",function(){
    num = 0;    
   value.textContent = num;
   colorupdate();
});
dbtn.addEventListener("click",function(){
    num-=1;    
    value.textContent = num;
    value.style.fontSize = `${num-num*10}px` ;
    colorupdate();
});
if(num = 0){
    value.style.fontSize = '20px';
}


function colorupdate(){
value.style.color = num > 0 ? 'green' : num < 0 ? 'red' : 'black';
value.style.fontSize = num < 0 ? `${Math.abs(num) * 10}px`: value.style.fontSize;
};