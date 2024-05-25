export default function Header() {
    return (
        <div className="w-full h-11 flex gap-2 items-center">
            <span className="text-white text-4xl font-bold">I'm going to work on</span>
            <div className="border-b border-gray h-11">
                <input
                    type="text"
                    placeholder="my project"
                    className="bg-transparent w-[250px] h-full text-4xl font-bold text-center text-gray placeholder:text-gray outline-none"
                />
            </div>
            <span className="text-white text-4xl font-bold">for:</span>
        </div>
    )
}