let intervalId;


const pipe1 = document.getElementById("pipe1");
pipe1.style.left = "1600px";



let pipes = document.querySelectorAll('.pipe');
let temp = 300;
pipes.forEach(pipe => {
    pipe.style.left = 1600 - temp + "px";
    temp += 300;
    pipe.style.bottom = (Math.floor(Math.random() * 4)) * 100 + "px";
    // pipe.style.marginBottom = (Math.floor(Math.random() * 4)) * 100 + "px";
});

function movePipes() {
    if (parseInt(document.getElementById('flyBtn').style.bottom <= 0)) {
        clearInterval(intervalId);
    }

    let pipeSpeed = 1.2;
    pipes.forEach(pipe => {


        console.log("asdad: " + document.getElementById('flyBtn').style.left);

        const pipeLeft = parseInt(pipe.style.left);
        pipe.style.left = (pipeLeft - pipeSpeed) + "px";
        if (pipeLeft + pipe.offsetWidth < 0) {
            pipe.style.left = "1400px";
            const randomHeight = Math.floor(Math.random() * 4) + 1;
            // pipe.style.height = randomHeight + '00px';
            pipe.style.height = '200px';
        }
    });
};

function moveBird() {
    document.getElementById('flyBtn').style.bottom = isNaN(document.getElementById('flyBtn').style.bottom) ? "0px"
        : (document.getElementById('flyBtn').style.bottom - 0.1) + "px";
    document.getElementById('airPlane').style.transform = "rotate(45deg)";
    if (isNaN(parseInt(document.getElementById('flyBtn').style.bottom)))
        document.getElementById('airPlane').style.transform = "rotate(0deg)";

    // clearInterval(intervalId);

};

window.onload = function () {
    intervalId = setInterval(movePipes, 0);
    setInterval(moveBird, 700);
};


document.getElementById('game-container').addEventListener('click', function () {
    let bottom = parseInt(document.getElementById('flyBtn').style.bottom);
    document.getElementById('flyBtn').style.bottom = isNaN(bottom) ? "50px" : (bottom + 300) + "px";
    if (bottom + 300 > 650)
        document.getElementById('flyBtn').style.bottom = "650px";
    // }
});

var sound = document.getElementById("crashSound");
var lastClickedTime = 0;
var delay = 500;
document.addEventListener('keydown', function (event) {
    // var currentTime = new Date().getTime();
    // if (currentTime - lastClickedTime < delay)
    //     sound.pause();
    // sound.currentTime = 0;
    // sound.play();
    // lastClickedTime = currentTime;
    if (event.key === 'ArrowUp') {
        document.getElementById('airPlane').style.transform = "rotate(-45deg)";
        let bottom = parseInt(document.getElementById('flyBtn').style.bottom);
        document.getElementById('flyBtn').style.bottom = isNaN(bottom) ? "50px" : (bottom + 300) + "px";
        if (bottom + 300 > 650)
            document.getElementById('flyBtn').style.bottom = "650px";
    }
    if (event.key === "ArrowRight")
        document.getElementById('airPlane').style.transform = "rotate(360deg)";

    if (event.key === "ArrowLeft")
        document.getElementById('airPlane').style.transform = "rotate(-360deg)";

});