import { useState } from "react"
import { Play, Hand, AlarmClockCheck } from "lucide-react"

import { useTimer, TimerStatus } from "../hooks/timer-context"

export default function Actions() {
    const [show, setShow] = useState<boolean>(false)

    const timer = useTimer()
    const shouldBeDisabled = timer.status == TimerStatus.OFF && timer.time.join("") == "0000"

    function handleOnClick() {
        if (timer.status == TimerStatus.OFF) {
            timer.startTimer()
        } else if (timer.status == TimerStatus.RUNNING) {
            timer.stopTimer()
        } else {
            timer.stopBeep()
        }
    }

    return (
        <div className="relative flex justify-center w-full h-16">
            <button
                className={`
                    flex 
                    items-center 
                    justify-center 
                    gap-2 
                    text-base 
                    font-bold 
                    text-white 
                    transition-all 
                    rounded-lg 
                    disabled:cursor-default 
                    ${timer.status == TimerStatus.OFF && "bg-light-green hover:bg-dark-green"}
                    ${timer.status == TimerStatus.RUNNING && "bg-danger hover:bg-danger/80"}
                    ${timer.status == TimerStatus.FINISHED && "bg-info hover:bg-info/80"}
                    size-full 
                `}
                disabled={shouldBeDisabled}
                onMouseOver={shouldBeDisabled ? () => setShow(true) : () => { }}
                onMouseLeave={() => setShow(false)}
                onClick={handleOnClick}
            >

                {timer.status == TimerStatus.OFF && (
                    <>
                        <Play size={20} />
                        <span>Start</span>
                    </>
                )}

                {timer.status == TimerStatus.RUNNING && (
                    <>
                        <Hand size={20} />
                        <span>Stop</span>
                    </>
                )}

                {timer.status == TimerStatus.FINISHED && (
                    <>
                        <AlarmClockCheck size={20} />
                        <span>Timer finished (stop the beep)</span>
                    </>
                )}
            </button>

            {show && (
                <div className="absolute p-4 text-center border top-[calc(64px+20px)] bg-card border-dark-green rounded-lg">
                    <span className="text-base font-normal text-white">You need to set the timer to continue.</span>
                </div>
            )}
        </div>
    )
}