function startClassification(){
navigator.mediaDevices.getUserMedia({audio:true});
classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/fpyVt_Dy4/model.json' , modelready);
}

function modelready()
{
classifier.classify(gotResult);
}

function gotResult(error , results) {
    if (error){
        console.error(error);
    }
    else {
        console.log(results);
    }
}
