import { useTimer } from "../hooks/timer-context"

export default function Timer() {
    const { time, updateTime } = useTimer()

    function selectNextInput(index: number) {
        const input: any = document.querySelector('#input-' + (index + 1))
        if (input) input.select()
    }

    function handleOnKeyDown(event: any, index: number) {
        const value = event.key

        if (isNaN(value)) return
        if (index == 2 && value > 5) return // The third item cannot be > 5.

        updateTime(value, index)
        selectNextInput(index)
    }

    return (
        <div className="flex items-center justify-between gap-4">
            {time.map((item, index) => (
                <div key={index} className={`bg-card w-[150px] h-[187px] flex items-center rounded-lg border-2 border-card focus-within:border-dark-green ${"order-" + (index + 1)}`}>
                    <input
                        type="text"
                        className="w-full font-bold text-center text-white bg-transparent outline-none text-9xl font-roboto-mono" 
                        id={`input-` + index}
                        maxLength={1}
                        autoFocus={index == 0}
                        value={item}
                        onKeyDown={event => handleOnKeyDown(event, index)}
                    />
                </div>
            ))}

            <span className="order-2 font-bold text-9xl text-dark-green">:</span>
        </div>
    )
}