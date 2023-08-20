const startButton = document.querySelector('.js-start-button');
const resetButton = document.querySelector('.js-reset-button');
let intervalId; // Variabel untuk menyimpan ID interval
let CountSecond = 0; // Variabel untuk menghitung iterasi
let countMinutes = 0;
<<<<<<< HEAD
let countHours = 0;
=======
let countHours = 1;
>>>>>>> d23dd25bf7c8e1476e8e046438a485c7df2eb15e

resetButton.addEventListener('click', () => {
    CountSecond = 0;
    countMinutes = 0;
    countHours = 0;
    Run(); // Memanggil fungsi Run() setelah mereset nilai
});

// Tambahkan event listener click hanya satu kali di sini
startButton.addEventListener('click', () => {
    if (startButton.innerHTML === 'Start') {
        startButton.innerHTML = 'Stop';
        intervalId = NumIteration(); // Mulai interval dan simpan ID interval
    } else if (startButton.innerHTML === 'Stop') {
        startButton.innerHTML = 'Start';
        clearInterval(intervalId); // Hentikan interval dengan menggunakan ID interval
    }
});

function Run() {
    const formattedMinutes = countMinutes < 10 ? `0${countMinutes}` : countMinutes;
    const formattedSeconds = CountSecond < 10 ? `0${CountSecond}` : CountSecond;
    const formattedHours = countHours < 10 ? `0${countHours}` : countHours;

    document.querySelector('.num-count').innerHTML = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

Run();

function NumIteration() {
    const numCount = document.querySelector('.num-count');
    intervalId = setInterval(() => {
        CountSecond++;
        if (CountSecond === 60) {
            countMinutes++;
            CountSecond = 0;

            if (countMinutes === 60) {
                countMinutes = 0;
                CountSecond = 0;
                // Tambahkan jam ketika melebihi 60 menit
                countHours++;
            }
        }

        // Format jam, menit, dan detik menjadi dua digit dengan tambahan "0" di depan jika kurang dari 10
        const formattedHours = countHours < 10 ? `0${countHours}` : countHours;
        const formattedMinutes = countMinutes < 10 ? `0${countMinutes}` : countMinutes;
        const formattedSeconds = CountSecond < 10 ? `0${CountSecond}` : CountSecond;

        // Perbarui tampilan waktu dengan format yang diinginkan
        numCount.innerHTML = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    }, 1000);

    return intervalId;
}

window.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        if (startButton.innerHTML === 'Start') {
            startButton.innerHTML = 'Stop';
            intervalId = NumIteration(); // Memulai interval dan simpan ID interval
        } else if (startButton.innerHTML === 'Stop') {
            startButton.innerHTML = 'Start';
            clearInterval(intervalId); // Hentikan interval dengan menggunakan ID interval
        }
    }
});
