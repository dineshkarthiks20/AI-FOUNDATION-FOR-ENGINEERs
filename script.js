window.onload=function(){
document.getElementById("loader").style.display="none";
}

const words=[
"Software Developer",
"Python Programmer",
"Web Developer",
"Robotics Enthusiast"
];

let i=0,j=0,del=false;

function type(){

let txt=words[i];

document.getElementById("typing").innerHTML=txt.substring(0,j);

if(!del){
j++;
if(j>txt.length){
del=true;
setTimeout(type,1000);
return;
}
}
else{
j--;
if(j==0){
del=false;
i=(i+1)%words.length;
}
}

setTimeout(type,del?60:120);

}

type();

const topBtn=document.getElementById("topBtn");

window.onscroll=function(){

if(document.documentElement.scrollTop>250)

topBtn.style.display="block";

else

topBtn.style.display="none";

}

topBtn.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

}
