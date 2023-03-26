function preload(){
classifier=ml5.imageClassifier('DoodleNet');
}

function setup(){
canvas=createCanvas(280,280);
canvas.center();
background('white');
canvas.position(540,250)
canvas.mouseReleased(classifyCanvas);
synth=window.speechSynthesis;
}

function draw(){
strokeWeight(10);
stroke(0);
if(mouseIsPressed)
{
line(pmouseX,pmouseY,mouseX,mouseY);
}
}

function canvascl(){
background("white");
document.getElementById("lable").innerHTML="Label : ";
document.getElementById("lableConfi").innerHTML="Confidence : ";
}
function classifyCanvas(){
    console.log("classifyCanvas");
    classifier.classify(canvas,gotResult);
}
function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("lable").innerHTML="Lable : "+results[0].label;
        document.getElementById("lableConfi").innerHTML="Confidence : "+Math.round(results[0].confidence*100)+"%";
        uttur= new SpeechSynthesisUtterance(results[0].label);
        synth.speak(uttur);

    }
}