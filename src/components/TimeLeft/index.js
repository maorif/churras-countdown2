
const TimeLeft = (date) => {

    const dateTime = date.getTime();
    const TimeNow = new Date().getTime();
    const timeDifference = dateTime - TimeNow;
    
    let timeLeft = {};

    if(timeDifference > 0){

        timeLeft = {
            days: Math.floor(timeDifference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((timeDifference % (1000 * 60)) / 1000)
        };
    }
    else { timeLeft = NaN }

    return timeLeft;
};

export default TimeLeft