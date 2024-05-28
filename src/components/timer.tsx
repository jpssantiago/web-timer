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
        <div className="flex items-center justify-between gap-4 medium:gap-4">
            {time.map((item, index) => (
                <>
                    <div 
                        className={`
                            bg-card 
                            w-[150px] 
                            h-[187px] 
                            flex 
                            items-center 
                            rounded-lg 
                            border-2 
                            border-card 
                            focus-within:border-dark-green
                            medium:w-full
                        `}
                >
                        <input
                            type="text"
                            className="w-full font-bold text-center text-white bg-transparent outline-none text-9xl font-roboto-mono medium:text-8xl small:text-7xl" 
                            id={`input-` + index}
                            maxLength={1}
                            autoFocus={index == 0}
                            value={item}
                            onKeyDown={event => handleOnKeyDown(event, index)}
                            onChange={() => {}} // React throws an error if there's no onChange.
                        />
                    </div>

                    {index == 1 && <span className="font-bold text-9xl text-dark-green medium:text-8xl small:text-8xl">:</span>}
                </>
            ))}
        </div>
    )
}