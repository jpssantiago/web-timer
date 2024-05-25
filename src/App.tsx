import { useState } from "react"

import Button from "./components/button"
import Countdown from "./components/countdown"
import Header from "./components/header"

import beepSound from "./assets/beep.mp3"

import "./global.css"

function App() {
  const [time, setTime] = useState<number[]>([0, 0, 0, 0])
  const [loop, setLoop] = useState<number | null>(null)

  function handleTimeChange(value: number, index: number) {
    const arr = time
    arr[index] = value
    setTime([...arr])
  }

  async function decreaseOneSecond() {
    const arr = time

    if (arr[3] > 0) {
      arr[3] -= 1
      setTime([...arr])
      return
    }

    if (arr[2] > 0) {
      arr[3] = 9
      arr[2] -= 1
      setTime([...arr])
      return
    }

    if (arr[1] > 0) {
      arr[3] = 9
      arr[2] = 5
      arr[1] -= 1
      setTime([...arr])
      return
    }

    if (arr[0] > 0) {
      arr[3] = 9
      arr[2] = 5
      arr[1] = 9
      arr[0] -= 1
      setTime([...arr])
      return
    }
  }

  function stopLoop(interval: number) {
    clearInterval(interval)
    setLoop(null)

    const audio = new Audio(beepSound)
    audio.loop = true
    audio.play()

    setTimeout(() => {
      audio.loop = false
    }, 5000)
  }

  function startLoop() {
    const interval = setInterval(() => {
      decreaseOneSecond()

      if (time.join("") == "0000") {
        stopLoop(interval)
      }
    }, 1000)

    setLoop(interval)
  }

  function handleClick() {
    if (loop) {
      stopLoop(loop)
    } else {
      startLoop()
    }
  }

  return (
    <div className="bg-background h-screen flex justify-center items-center px-40 py-20 font-roboto">
      <div className="max-w-[1120px] max-h-[744px] size-full rounded-lg flex justify-center items-center">
        <div className="flex flex-col items-center justify-between gap-10">
          <Header />
          <Countdown time={time} onTimeChange={handleTimeChange} isRunning={!!loop} />
          <Button time={time} onClick={handleClick} isRunning={!!loop} />
        </div>
      </div>
    </div>
  )
}

export default App