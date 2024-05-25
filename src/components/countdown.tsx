interface Props {
    time: number[]
    onTimeChange: (value: number, index: number) => any
    isRunning: boolean
}

export default function Countdown({ time, onTimeChange, isRunning }: Props) {
    function handleTimeChange(event: any, index: number) {
        const value: string = event.target.value
        if (isNaN(Number(value))) return

        if (index == 0 || index == 2) {
            if (Number(value) > 5) return
        }

        onTimeChange(Number(event.target.value), index)

        if (index < 3) {
            const nextInput: any = document.querySelector("#input-" + (index + 1))
            nextInput.select()
        }
    }

    return (
        <div className="w-full max-h-[200px] flex justify-between items-center font-roboto-mono">
            <div className="flex gap-4">
                <div className="bg-card flex justify-center items-center p-8 rounded-lg">
                    <input
                        id="input-0"
                        type="text"
                        className="bg-transparent w-[60px] text-white text-center text-[100px] outline-none"
                        value={time[0]}
                        onChange={(e) => handleTimeChange(e, 0)}
                        maxLength={1}
                        autoFocus={true}
                        onFocus={(e) => e.currentTarget.select()}
                        disabled={isRunning}
                    />
                </div>

                <div className="bg-card flex justify-center items-center p-8 rounded-lg">
                    <input
                        id="input-1"
                        type="text"
                        className="bg-transparent w-[60px] text-white text-center text-[100px] outline-none"
                        value={time[1]}
                        onChange={(e) => handleTimeChange(e, 1)}
                        maxLength={1}
                        onFocus={(e) => e.currentTarget.select()}
                        disabled={isRunning}
                    />
                </div>
            </div>

            <span className="text-green text-[100px]">:</span>

            <div className="flex gap-4">
                <div className="bg-card flex justify-center items-center p-8 rounded-lg">
                    <input
                        id="input-2"
                        type="text"
                        className="bg-transparent w-[60px] text-white text-center text-[100px] outline-none"
                        value={time[2]} 
                        onChange={(e) => handleTimeChange(e, 2)}
                        maxLength={1}
                        onFocus={(e) => e.currentTarget.select()}
                        disabled={isRunning}
                    />
                </div>
                
                <div className="bg-card flex justify-center items-center p-8 rounded-lg">
                    <input
                        id="input-3"
                        type="text"
                        className="bg-transparent w-[60px] text-white text-center text-[100px] outline-none" 
                        value={time[3]}
                        onChange={(e) => handleTimeChange(e, 3)}
                        maxLength={1}
                        onFocus={(e) => e.currentTarget.select()}
                        disabled={isRunning}
                    />
                </div>
            </div>

        </div>
    )
}