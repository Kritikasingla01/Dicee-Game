var randomNo1 = Math.floor(Math.random()*6) + 1; //gnumber from 1-6

var randomImage = "dice" +randomNo1+ ".png";  //dice1.png - dice6.png

var imageSource = "images/" +randomImage;       //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",imageSource);


// second dice image

var randomNo2 = Math.floor(Math.random()*6) + 1; //gnumber from 1-6

var randomImage2 = "dice" +randomNo2+ ".png";  //dice1.png - dice6.png

var imageSource2 = "images/" +randomImage2;       //images/dice1.png - images/dice6.png

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",imageSource2);



//displaying winner

if(randomNo1 > randomNo2)
{
    document.querySelector("h1").innerHTML="Player 1 Wins";
}

else if(randomNo1 === randomNo2)
{
    document.querySelector("h1").innerHTML="Both wins!!";
}

else
{
    document.querySelector("h1").innerHTML="Player 2 Wins";
}