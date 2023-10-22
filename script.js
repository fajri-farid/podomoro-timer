let workTitle = document.getElementById('fokus');
let breakTitle = document.getElementById('istirahat');

let waktuFokus = 25;
let waktuIstirahat = 5;

let detik = "00";

window.onload = () => {
    document.getElementById('menit').innerHTML = waktuFokus;
    document.getElementById('detik').innerHTML = detik;

    workTitle.classList.add('aktif');
}

function mulai(){
        document.getElementById('mulai').style.display = "none";
        document.getElementById('reset').style.display = "block";

    detik = 59;

    let menitFokus = waktuFokus - 1;
    let menitIstirahat = waktuIstirahat - 1;

    breakCount = 0;

    let timerFunction =()=> {
        document.getElementById('menit').innerHTML = menitFokus.toString().padStart(2, '0'); 
        document.getElementById('detik').innerHTML = detik.toString().padStart(2, '0');

        detik = detik - 1;

        if(detik === 0){
            menitFokus = menitFokus - 1;
            if(menitFokus === -1){
                if(breakCount % 2 === 0){
                    menitFokus = menitIstirahat;
                    breakCount++;

                    workTitle.classList.remove('aktif');
                    breakTitle.classList.add('aktif');
                }else{
                    menitFokus = waktuFokus;
                    breakCount++;

                    breakTitle.classList.remove('aktif');
                    workTitle.classList.add('aktif');
                }
            }
            detik =59;
        }
    }
    setInterval(timerFunction, 1000);
}
