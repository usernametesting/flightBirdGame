let intervalId;


const pipe1 = document.getElementById("pipe1");
pipe1.style.left = "1600px";



let pipes = document.querySelectorAll('.pipe');
let temp = 300;
pipes.forEach(pipe => {
    pipe.style.left = 1600 - temp + "px";
    temp += 300;
    pipe.style.marginBottom = (Math.floor(Math.random() * 5) + 1) * 100 + "px";
});

function movePipes() {
    if (parseInt(document.getElementById('flyBtn').style.bottom <= 0)) {
        clearInterval(intervalId);
    }
    let pipeSpeed = 1.2;
    pipes.forEach(pipe => {
        const pipeLeft = parseInt(pipe.style.left);
        pipe.style.left = (pipeLeft - pipeSpeed) + "px";
        if (pipeLeft + pipe.offsetWidth < 0) {
            pipe.style.left = "1400px";
            const randomHeight = Math.floor(Math.random() * 4) + 1;
            // pipe.style.height = randomHeight + '00px';
            pipe.style.height = '300px';
        }
    });
};

function moveBird() {
    document.getElementById('flyBtn').style.bottom = isNaN(document.getElementById('flyBtn').style.bottom) ? "0px"
        : (document.getElementById('flyBtn').style.bottom - 0.1) + "px";
};

window.onload = function () {
    intervalId = setInterval(movePipes, 0);
    setInterval(moveBird, 700);
};
// document.getElementById('flyBtn').addEventListener('click',function(){
//     let bottom = parseInt(this.style.bottom);
//     this.style.bottom = isNaN(bottom) ? "0px" : (bottom + 50) + "px";
// });


document.getElementById('game-container').addEventListener('click', function () {
    let bottom = parseInt(document.getElementById('flyBtn').style.bottom);
    document.getElementById('flyBtn').style.bottom = isNaN(bottom) ? "50px" : (bottom + 300) + "px";
    if (bottom + 300 > 650)
        document.getElementById('flyBtn').style.bottom = "650px";
    // }
});


document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowUp') {
        let bottom = parseInt(document.getElementById('flyBtn').style.bottom);
        document.getElementById('flyBtn').style.bottom = isNaN(bottom) ? "50px" : (bottom + 300) + "px";
        if (bottom + 300 > 650)
            document.getElementById('flyBtn').style.bottom = "650px";
    }
});