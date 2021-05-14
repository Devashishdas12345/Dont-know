function setup() {
  canvas = createCanvas(240, 240);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier = ml5.imageClassifier('MobileNet' , modelLoaded);
}

function modelLoaded() {
  console.log("Model is loaded");
}

function draw() {
  image(video , 0 , 0 , 235 , 235);
  classifier.classify(video , gotResult);
}

function gotResult(error , results) {
  if (error) {
    console.log("error");
    console.error("error");
  }
  
  else {
    console.log(results);
    document.getElementById("object_name").innerHTML = results[0].label;
    document.getElementById("object_accuracy").innerHTML = results[0].confidence.toFixed(3);
  }
}