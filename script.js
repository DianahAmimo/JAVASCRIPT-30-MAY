'use strict'
var Animal = function(name,color,legs) {
    this.name = name;
    this.color=color;
    this.legs=legs;
}

var animal1 = new Animal("Gazelle" , "Brown", 4);

var animal2 = new Animal('Cow' ,'Black', 4);

var animal3 = new Animal('Pig' ,'pink', 4);

var animal4 = new Animal('Rabbit' ,'white', 4);


document.getElementById('gazelle').onclick = function()
{
	document.getElementById('p1').innerHTML="The first animal is: " +animal1.name+ ", "+ "color: "+ animal1.color+ ", "+"Number of legs:"+animal1.legs;
	
}


document.getElementById('cow').onclick = function()
{
	document.getElementById('p2').innerHTML="The second animal is: " +animal2.name+ ", "+ "color: "+ animal2.color+ ", "+"Number of legs:"+animal2.legs;
}

document.getElementById('pig').onclick = function()
{
	document.getElementById('p3').innerHTML="The third animal is: " +animal3.name+ ", "+ "color: "+ animal3.color+ ", "+"Number of legs:"+animal3.legs;
}

document.getElementById('rabbit').onclick = function()
{
 document.getElementById('p4').innerHTML="The fourth animal is: " +animal4.name+ ", "+ "color: "+ animal4.color+ ", "+"Number of legs:"+animal4.legs;
 }
