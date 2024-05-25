import { HandMetal, Hand } from "lucide-react"

interface Props {
    time: number[]
    onClick: () => any
    isRunning: boolean
}

export default function Button({ time, onClick, isRunning }: Props) {
    function isThereAnyNumber(): boolean {
        return Number(time.join("")) > 0
    }

    return (
        <button
            disabled={!isThereAnyNumber()}
            onClick={onClick}
            className={`w-full h-16 flex gap-2 justify-center items-center text-lg font-bold ${isRunning ? "bg-red" : "bg-green"} ${isRunning ? "hover:bg-red/70" : "hover:bg-light-green"} disabled:bg-light-green text-white rounded-l transition-all`}
        >
            {isRunning ? (
                <Hand size={24} />
            ) : (
                <HandMetal size={24} />  
            )}
            <span>{isRunning ? "Stop" : "Start"}</span>
        </button>
    )
}