var t1=document.getElementById("1p");
var t2=document.getElementById("2p");
alert("Enter the name of the players!!!!");
let p=prompt("Player 1 name");
let q=prompt("Player 2 name");
var t=parseInt(prompt("Best of 3 or Best of 5"));
t1.innerHTML=p;
t2.innerHTML=q;
let p1=0;let p2=0;
function check()
{
    if(t!=0)
    {
        let a=Math.floor((Math.random()*6)+1);
        var d1=document.getElementById("p1img");
        let b=Math.floor((Math.random()*6)+1);
        var d2=document.getElementById("p2img");
        switch(a)
        {
            case 1:d1.src="1.png";break;
            case 2:d1.src="2.png";break;
            case 3:d1.src="3.jpg";break;
            case 4:d1.src="4.png";break;
            case 5:d1.src="5.jpg";break;
            case 6:d1.src="6.jpg";break;
        }
        switch(b)
        {
            case 1:d2.src="1.png";break;
            case 2:d2.src="2.png";break;
            case 3:d2.src="3.jpg";break;
            case 4:d2.src="4.png";break;
            case 5:d2.src="5.jpg";break;
            case 6:d2.src="6.jpg";break;
        }
        var d=document.getElementById("h1");
        if(a>b){
            d.innerHTML=p+" Won!!";p1=p1+1;}
        else if(a<b){
            d.innerHTML=q+" Won!!";p2=p2+1;}
        else
            d.innerHTML="Draw!!";
        t=t-1;    
    }        
    else{
        alert("End game!!");
        if(p1>p2)
            d.innerHTML=p+" is the winner.";
        else if(p1<p2)
            d.innerHTML=q+" is the winner.";
        else
            d.innerHTML="No Result!!";        
    }
}
