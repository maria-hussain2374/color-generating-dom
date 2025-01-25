let btn=document.getElementById("btn");
btn.onclick=()=>{
   let letters='0123456789ABCDEF' ;
   let color="#";
   for(let i=0;i<6;i++){
    color+=letters[Math.floor(Math.random()*16)];
   }
   document.body.style.backgroundColor=color;
}
