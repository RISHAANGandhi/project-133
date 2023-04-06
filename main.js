x = 0;
y = 0;
var apple="";
var speak_data="";
var to_number="";
function preload(){
 apple= loadImage("apple.png");
}


draw_apple = "";

 SpeechRecognition = window.webkitSpeechRecognition;
  
 recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 
    to_number=Number(content);
    if(Number.isInteger(to_number)){
      document.getElementById("status").innerHTML="Started drawing apple";
      draw_apple="set";
    }
    else{
      document.getElementById("status").innerHTML="Speech has not been recognised as a number";
    }

}

function setup() {
 canvas=createCanvas(900,600);
 
}

function draw() {
  if(draw_apple == "set")
  {
    for ( i = 1; i <=to_number; i++) {
      
      x=Math.floor(Math.random()*800);
      y=Math.floor(Math.random()*500);
      image(apple,x,y,40,40);
    }
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
    speak();
   
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}

