const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var Hour = datetime.slice(11,13);

var bg ;

function preload() {
     getBackgroundImg()
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add

    if(backgroundImg)
    background(backgroundImg);

    Engine.update(engine);

    // write code to display time in correct format here

    fill("white")
    textSize(25)
    text("Time : " + Hour, 180,100)

}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("http://worldclockapi.com/api/json/est/now")

    //change the data in JSON format
    var responsejson = await response.json()
    var datetime= responsejson.currentDateTime

    // write code slice the datetime

    var Hour = datetime.slice(11,13)


    // add conditions to change the background images from sunrise to sunset

    if(Hour>=04 && Hour<=06)
    {
        bg = "sunrise1.png";
    }
    else if(Hour>=06 && Hour<=08)
    {
        bg = "sunrise2.png";
    }
    else if(Hour>=23 && Hour==0)
    {
        bg = "sunset10.png";
    }
    else if(Hour==0 && Hour<=03)
    {
        bg = "sunset11.png";
    }
    else{
        bg = "sunset12.png";
    }

    console.log(Hour)


    //load the image in backgroundImg variable here
    backgroundImg = loadImage(bg)

}
