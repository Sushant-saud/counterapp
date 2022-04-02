const count=document.querySelector(".count");
const buttons=document.querySelector(".buttons");
buttons.addEventListener('click',(e)=>{
  if(e.target.classList.contains("Add"))
  {
    
   count.innerHTML++;
   setColor();
  }
  if(e.target.classList.contains("sub"))
  {
    count.innerHTML--;
    setColor();
  }
  if(e.target.classList.contains("Reset"))
  {
    count.innerHTML=0;
    setColor();
  }

});
function setColor()
{
  if(count.innerHTML>0)
  {
    count.style.color="yellow";
  }
  else if(count.innerHTML<0)
  {
    count.style.color="orangered"
  }
  else{
    count.style.color="#fff";
  }
}


/*addCount.addEventListener('click',()=>
{
  count.innerHTML++;
})
subCount.addEventListener('click',()=>
{
    count.innerHTML--;
})
ResetCount.addEventListener('click',()=>{
   count.innerHTML=0;
})*/

