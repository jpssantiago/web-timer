import { useState } from "react"
import { HandMetal, Hand } from "lucide-react"

interface Props {
    time: number[]
    onClick: () => any
    isRunning: boolean
}

export default function Button({ time, onClick, isRunning }: Props) {
    const [showTooltip, setShowTooltip] = useState<boolean>(false)

    function isThereAnyNumber(): boolean {
        return Number(time.join("")) > 0
    }

    return (
        <div className="w-full relative flex flex-col items-center">
            <button
                onMouseOver={() => !isThereAnyNumber() && setShowTooltip(true)}
                onMouseOut={() => setShowTooltip(false)}
                disabled={!isThereAnyNumber()}
                onClick={onClick}
                className={`w-full h-16 flex gap-2 justify-center items-center text-lg font-bold ${isRunning ? "bg-red" : "bg-green"} ${isRunning ? "hover:bg-red/70" : "hover:bg-light-green"} disabled:bg-light-green text-white rounded-lg transition-all`}
            >
                {isRunning ? (
                    <Hand size={24} />
                ) : (
                    <HandMetal size={24} />  
                )}
                <span>{isRunning ? "Stop" : "Start"}</span>
            </button>

            <div className={`bg-card w-fit ${showTooltip ? "flex" : "hidden"} justify-center items-center p-4 absolute top-[80px] rounded-lg border border-green`}>
                <span className="text-white/70">You need to set the timer to continue.</span>
            </div>
        </div>
    )
}