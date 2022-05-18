function Start(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/b8RTrTYPC/model.json', modelReady)
}

function modelReady(){
    console.log("Model Loaded");
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if(error){
        console.error(error);
    } else {
        console.log(results);

        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can Hear - '+results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - '+(results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color = 'rgb('+random_number_r+', '+random_number_g+', '+random_number_b+')';
        document.getElementById("result_confidence").style.color = 'rgb('+random_number_r+', '+random_number_g+', '+random_number_b+')';

        img01 = document.getElementById("listen ear gif.gif");
        
        if(results[0].label == "Bark"){
            img01.src = "bark.gif";
            
        } else if(results[0].label == "Meow"){
            img01.src = "meow.gif";
            
        } else if(results[0].label == "Roar"){
            img01.src = "Roar.gif";

        } else if(results[0].label == "Moo") {
            img01.src = "cow-mooo.gif";
           
        }else {
            img01.src = "listen ear gif.gif";
        }


    }
}