import useDate from "./customHooks/useDate.jsx"
import useSwitch from "./customHooks/useSwitch.jsx"
import useCustomPointer from "./customHooks/useCustomPointer.jsx"
function App() {

  // useSwitch
  const { isOn, toggle } = useSwitch()
  // useDate
  const currentDate = useDate()
  // useCustomPointer
  const customPointer = useCustomPointer(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" id="Alien--Streamline-Flex" height={14} width={14} ><desc>{"Alien Streamline Icon: https://streamlinehq.com"}</desc><g id="alien--science-extraterristerial-life-form-space-universe-head-astronomy"><path id="Subtract" fill="#000000" fillRule="evenodd" d="M2.90137 1.02154C4.32751 0.308457 5.99481 0.25 6.99994 0.25c1.00514 0 2.67246 0.058457 4.09866 0.77154 0.7231 0.36153 1.3937 0.89567 1.8807 1.67938 0.4872 0.78382 0.7707 1.78516 0.7707 3.04908 0 2.92372 -1.2644 4.9318 -2.7362 6.1998 -0.7314 0.6302 -1.51241 1.0769 -2.21323 1.367 -0.69177 0.2863 -1.3374 0.4333 -1.80063 0.4333 -0.46322 0 -1.10885 -0.147 -1.80061 -0.4333 -0.70081 -0.2901 -1.48179 -0.7368 -2.21322 -1.367C1.51433 10.6818 0.25 8.67371 0.25 5.75c0 -1.26392 0.283515 -2.26525 0.77063 -3.04907 0.48705 -0.78372 1.15766 -1.31785 1.88074 -1.67939Zm0.96113 3.6022c0.44776 0.03102 0.95236 0.19478 1.36983 0.63604 0.41746 0.44126 0.59904 1.0028 0.66026 1.5098 0.0609 0.50424 0.00546 0.97299 -0.06809 1.26089 -0.02028 0.07939 -0.07199 0.14307 -0.13983 0.17219 -0.24601 0.10561 -0.65146 0.2044 -1.09679 0.17355 -0.44776 -0.03101 -0.95236 -0.19477 -1.36982 -0.63604 -0.41747 -0.44126 -0.59905 -1.0028 -0.66027 -1.5098 -0.0609 -0.50424 -0.00546 -0.97299 0.06809 -1.26088 0.02028 -0.07939 0.07199 -0.14308 0.13983 -0.1722 0.24601 -0.10561 0.65146 -0.20439 1.09679 -0.17355Zm6.2253 0c-0.44779 0.03102 -0.95239 0.19478 -1.36985 0.63604 -0.41746 0.44126 -0.59904 1.0028 -0.66027 1.5098 -0.0609 0.50424 -0.00546 0.97299 0.06809 1.26089 0.02028 0.07939 0.072 0.14307 0.13983 0.17219 0.24601 0.10561 0.65146 0.2044 1.09679 0.17355 0.44776 -0.03101 0.95241 -0.19477 1.36981 -0.63604 0.4175 -0.44126 0.5991 -1.0028 0.6603 -1.5098 0.0609 -0.50424 0.0054 -0.97299 -0.0681 -1.26088 -0.0203 -0.07939 -0.072 -0.14308 -0.1398 -0.1722 -0.2461 -0.10561 -0.6515 -0.20439 -1.0968 -0.17355Z" clipRule="evenodd" strokeWidth={1} /></g></svg>)

  return (
    <main className="min-h-screen bg-sky-600">
      <h1 className="font-bold text-gray-100 text-5xl text-center py-5">Custom hooks</h1>
      <section className="container mx-auto flex flex-col mb-10">
        <h2 className="font-bold text-gray-100 text-xl text-start py-2">useSwitch()</h2>
        <span className={`${isOn ? 'text-green-600' : 'text-red-500'}`}>Il valore è: {isOn ? "ON" : "OFF"}</span>
        <button className='self-start mt-5 py-3 px-2 rounded-lg bg-sky-800 hover:bg-sky-500 text-gray-300 cursor-pointer' onClick={toggle}>Change state</button>
      </section>
      <section className="container mx-auto flex flex-col mb-10">
        <h2 className="font-bold text-gray-100 text-xl text-start py-2">useDate()</h2>
        <span className="text-gray-300">Date and time:</span>
        <p className="text-violet-900">{currentDate.toLocaleString()}</p>
      </section>
      <section className="container mx-auto flex flex-col mb-10">
        <h2 className="font-bold text-gray-100 text-xl text-start py-2">useCustomPointer()</h2>
        <h3 className="text-gray-800">Sposta il mouse per vedere il cursore personalizzato!</h3>
        {customPointer}
      </section>
    </main>
  )
}

export default App
