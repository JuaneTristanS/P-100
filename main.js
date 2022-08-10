var SpeechRecognition = window.webkitSpeechRecognition;
var recog = new SpeechRecognition();

function start() {
    document.getElementById("textbox").innerHTML = "";
    recog.start();
}

recog.onresult = function (event) {
    console.log(event);
    var script = event.results[0][0].transcript;
    console.log(script);
    document.getElementById("textbox").innerHTML = script;
}

function speak() {
    synth = window.speechSynthesis;
    box = "taking your selfie in five seconds";
    utterthis = new SpeechSynthesisUtterance(box);
    synth.speak(utterthis);
    Webcam.attach('#camera');

    setTimeout(function () {
        snapshot();
        save();
    }, 5000);
}

Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
});

function snapshot() {
    Webcam.snap(function (URL) {
        document.getElementById("result").innerHTML = '<img id="image" src="' + URL + '">';
    });
}

function save() {
    link = document.getElementById("link").value;
    image = document.getElementById("image").src;
    link.href = image;
    link.click();
}