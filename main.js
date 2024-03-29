prediction_1 = ""

Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/n64BtLOtE/model.json',modelLoaded);

  function modelLoaded() {
    console.log('Model Loaded!');
  }

function speak(){
  var synth = window.speechSynthesis;
  speak_data_1 = "The first prediction is " + prediction_1;
  var utterThis = new SpeechSynthesisUtterance(speak_data_1);
  synth.speak(utterThis);
}

function check()
{
    img = document.getElementById("captured_image");
    classifier.classify(img, gotResult);
}

function gotResult(error, results) {
    if (error){
    console.error(error);
    }else{
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML = results[0].label;
        perdiction_1 = results[0].label;
        speak();
        if(result[0].label == "Amazing")
        {
            document.getElementById("update_emoji").innerHTML = "&#128076;";
        }
        if(result[0].label == "Good job")
        {
            document.getElementById("update_emoji").innerHTML = "&#128077;";
        }
        if(result[0].label == "Dislike")
        {
            document.getElementById("update_emoji").innerHTML = "&#128078";
        }
        if(result[0].label == "High five")
        {
            document.getElementById("update_emoji").innerHTML = "&#128079;";
        }
        if(result[0].label == "You")
        {
            document.getElementById("update_emoji").innerHTML = "&#128073;";
        }
       
    }
}