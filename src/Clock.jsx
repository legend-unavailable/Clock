import { useState, useEffect } from "react";
function Clock() {
    const [time, setTime] = useState(new Date());
    useEffect(() => {
        const intervalID = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return() => {clearInterval(intervalID);}
    }, [])
    function formatTime() {
        let hrs = time.getHours();
        const min = time.getMinutes();
        const sec = time.getSeconds();
        const meridiem = hrs >= 12 ? 'PM' : 'AM';
        hrs = hrs % 12 || 12;
        return `${padZero(hrs)}:${padZero(min)}:${padZero(sec)} ${meridiem}`
    }
    function padZero(num) {
        return (num < 10 ? '0' : '') + num;
    }
    return(
        <div className="clockContain">
            <div className="clock">
                <span>{formatTime()}</span>
            </div>
        </div>
    );
}
export default Clock;