import { createContext, useContext, useState } from "react"

import beepSound from "../assets/sounds/beep.mp3"

export enum TimerStatus {
    OFF,
    RUNNING,
    FINISHED
}

interface TimerContextType {
    time: number[]
    status: TimerStatus
    updateTime: (value: number, index: number) => any
    startTimer: () => any
    stopTimer: () => any
    stopBeep: () => any
}

export const TimerContext = createContext({} as TimerContextType)

export function useTimer() {
    return useContext(TimerContext)
}

export function TimerProvider({ children }: any) {
    const [time, setTime] = useState<number[]>([0, 0, 0, 0])
    const [status, setStatus] = useState<TimerStatus>(TimerStatus.OFF)

    const [timerLoop, setTimerLoop] = useState<number | null>(null)
    const [audio, _] = useState<HTMLAudioElement>(new Audio(beepSound))

    function updateTime(value: number, index: number) {
        const arr = [...time]
        arr[index] = value

        setTime(arr)
    }

    function decreaseByOne(previous: number[]): number[] {
        const arr = [...previous]

        if (arr[3] > 0) {
            arr[3] -= 1
            
            return arr
        }

        if (arr[2] > 0) {
            arr[3] = 9
            arr[2] -= 1
            
            return arr
        }

        if (arr[1] > 0) {
            arr[3] = 9
            arr[2] = 5
            arr[1] -= 1

            return arr
        }

        arr[3] = 9
        arr[2] = 5
        arr[1] = 9
        arr[0] -= 1
        return arr
    }

    function startTimer() {
        setStatus(TimerStatus.RUNNING)

        const interval = setInterval(() => {
            setTime(previous => {
                const arr = decreaseByOne(previous)

                if (arr.join("") == "0000") {
                    setStatus(TimerStatus.FINISHED)

                    clearInterval(interval)

                    audio.loop = true
                    audio.play()
                }

                return arr
            })
        }, 1000)

        setTimerLoop(interval)
    }

    function stopTimer() {
        setStatus(TimerStatus.OFF)
        clearInterval(timerLoop!)
        setTimerLoop(null)
    }

    function stopBeep() {
        setStatus(TimerStatus.OFF)
        audio.loop = false
    }

    return (
        <TimerContext.Provider value={{ time, status, updateTime, startTimer, stopTimer, stopBeep }}>
            {children}
        </TimerContext.Provider>
    )
}