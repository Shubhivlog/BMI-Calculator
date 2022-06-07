let a=document.querySelectorAll('input');
let w=a[0];
let h=a[1];
let v=document.querySelector('.value');
let s=document.querySelector('.status');
let btn=document.querySelector('button');
let bmi=0;
btn.addEventListener('click', ()=>{
bmi=w.value/(h.value**2)*100*100;
bmi=bmi.toFixed(2);
v.innerText=bmi;
if(bmi<18.5)
{
    s.innerText='You are Underweight';
}
else if(bmi>18.5 && bmi<24.9)
{
    s.innerText="You are Healthy";
}
else if(bmi>25 && bmi<29.9)
{
    s.innerText='You are Overweight';
}
else{
    s.innerText='You are Obese';
}
});