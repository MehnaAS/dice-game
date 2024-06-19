var randomnumber=Math.floor(Math.random()*6)+1;
var randomnumber2=Math.floor(Math.random()*6)+1;
//console.log(randomnumber);
var randomdiceimg="images/dice"+randomnumber+".png";
var randomdiceimg2="images/dice"+randomnumber2+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomdiceimg);
document.querySelectorAll("img")[1].setAttribute("src",randomdiceimg2);
if(randomnumber>randomnumber2)
    document.querySelector("h1").innerHTML="Wohoo Player1 WON";
else if(randomnumber==randomnumber2)
    document.querySelector("h1").innerHTML="OOPS ITS A TIE";
else
    document.querySelector("h1").innerHTML="Wohoo PLayer2 WON";
