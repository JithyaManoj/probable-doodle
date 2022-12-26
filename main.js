stanut = "";
coca = [];

function preload() {
    vivo = createCapture(VIDEO);
    vivo.hide();

}


function setup() {
    canvas = createCanvas(480, 380);
    canvas.center();


}

function playwifi() {
    modelcoco = ml5.objectDetector("cocssd", modelcocnut);
    document.getElementById("stawi").innerHTML = "I am ready to spy"
    if (coca[i].lable == coca_nom) {
        document.getElementById("stawi").innerHTML = coca_nom + " has been found"
    }
}

function draw() {
    image(vivo, 0, 0, 480, 380);
    if (stanut != "") {
        modelcoco.detect(vivo, recoc);
        for (i = 0; i < coca.length; i++) {
            document.getElementById("stawi").innerHTML = "I have found the victim!"
            document.getElementById("noofbj").innerHTML = "I have found for you " + coca.length + " victims";
            coca_nom = coca[i].label;
            coca_con = floor(coca[i].confidence * 100);
            fill("blue");
            textSize(20)
            text(coca_nom + " " + coca_con + "%", coca[i].x, coca[i].y);
            noFill();
            stroke("black");
            rect(coca[i].x, coca[i].y, coca[i].width, coca[i].height)
        }

    }
}

function recoc(e, r) {
    if (e) {
        console.error(e);
    } else {
        console.log(r);
        coca = r;
    }
}

function modelcocnut() {
    console.log("YAYAYAYAYAYAYAYAYAYAYAYAYAYAYAY!!!!!!!");
    stanut = true;
    vivo.loop();
    vivo.volume(0);
    vivo.speed(1);
}