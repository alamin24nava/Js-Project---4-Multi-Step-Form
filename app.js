let digitalClock = () => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    timeFormat = 'AM';
    if (hours == 0) {
        hours = 12;
    }
    if (hours > 12) {
        hours = hours - 12;
        timeFormat = 'PM';
    }
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    currentTime = `${hours} : ${minutes} : ${seconds} ${timeFormat}`;
    document.querySelector('.clock-wrap').innerHTML = currentTime;
    setInterval(digitalClock, 100);
}
digitalClock()