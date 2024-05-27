import Header from "./components/header"
import Timer from "./components/timer"
import Actions from "./components/actions"

import "./global.css"

export default function App() {
  return (
    <div className="flex items-center justify-center h-screen bg-background">
      <div className="max-w-[700px] w-full font-roboto flex flex-col gap-[60px]">
        <Header />
        <Timer />
        <Actions />
      </div>
    </div>
  )
}