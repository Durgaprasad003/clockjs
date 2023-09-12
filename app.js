const hours=document.querySelector(".hour")
const minutes=document.getElementsByClassName("minute")[0];
const seconds=document.getElementsByClassName("second")[0];

function update()
{
    const currentdate=new Date();
    const hour=currentdate.getHours();
    const minute=currentdate.getMinutes();
    const second=currentdate.getSeconds();
    const hourdeg=(hour / 12)*360;
    hours.style.transform=`rotate(${hourdeg}deg)`;
    const minutedeg=(minute/60)*360;
    minutes.style.transform=`rotate(${minutedeg}deg)`;
    const seconddeg=(second/60)*360;
    seconds.style.transform=`rotate(${seconddeg}deg)`;
    
   
    // setTimeout(update,1000)
}
setInterval(update,1000);