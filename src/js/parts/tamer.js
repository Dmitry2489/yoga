function tamer(){
    //Tamer start

    let deadline = '2020-05-30';


    // * получаем время  до deadline 
    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / (1000 * 60 * 60)));

        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timerInterval = setInterval(uddeteClock, 1000);

        function uddeteClock() {
            let t = getTimeRemaining(endtime);
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;

            if (t.hours < 10) {
                hours.textContent = "0" + t.hours;
            }
            if (t.minutes < 10) {
                minutes.textContent = "0" + t.minutes;
            }
            if (t.seconds < 10) {
                seconds.textContent = "0" + t.seconds;
            }

            if (t.total <= 0) {
                clearInterval(timerInterval);
            }
        }

    }
    setClock('timer', deadline);

    //Tamer end
}
export default tamer;