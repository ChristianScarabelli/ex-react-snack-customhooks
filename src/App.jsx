import useDate from "./customHooks/useDate.jsx"
import useSwitch from "./customHooks/useSwitch.jsx"

function App() {

  // useSwitch
  const { isOn, toggle } = useSwitch()
  // useDate
  const currentDate = useDate()


  return (
    <main className="min-h-screen bg-sky-600">
      <h1 className="font-bold text-gray-100 text-5xl text-center py-5">Custom hooks</h1>
      <section className="container mx-auto flex flex-col mb-10">
        <h2 className="font-bold text-gray-100 text-xl text-start py-2">useSwitch()</h2>
        <span className="text-gray-300">Il valore è: {isOn ? "ON" : "OFF"}</span>
        <button className="self-start mt-5 py-3 px-2 rounded-lg bg-sky-800 hover:bg-sky-500 text-gray-300 cursor-pointer" onClick={toggle}>Change state</button>
      </section>
      <section className="container mx-auto flex flex-col mb-10">
        <h2 className="font-bold text-gray-100 text-xl text-start py-2">useDate()</h2>
        <span className="text-gray-300">Date and time:</span>
        <p className="text-violet-900">{currentDate.toLocaleString()}</p>
      </section>
    </main>
  )
}

export default App
