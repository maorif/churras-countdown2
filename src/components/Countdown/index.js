import { useEffect, useState } from "react";
import TimeLeft from "../TimeLeft"

const Countdown = () => {

    const CHURRAS_DATE = new Date('Sat Jan 14 2023 00:00:00');
    const[timeLeft, setTimeLeft] = useState(TimeLeft(CHURRAS_DATE));
    
    useEffect(() => {
        setTimeout(() => {
            setTimeLeft(TimeLeft(CHURRAS_DATE));
        }, 1000);
    });


    return (
        <p>{Object.keys(timeLeft) <= 0 ? 'CHEGOU O DIA!!' : `${timeLeft.days} Dias ${timeLeft.hours} Horas ${timeLeft.minutes} Minutos ${timeLeft.seconds} Segundos`}</p>
    );
};

export default Countdown;