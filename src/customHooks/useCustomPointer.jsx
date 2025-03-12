import { useState, useEffect } from "react"

export default function useCustomPointer(icon) {
    const [position, setPosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const handleMouseMove = (event) => {
            setPosition({ x: event.clientX, y: event.clientY })
        }

        window.addEventListener("mousemove", handleMouseMove)

        return () => {
            window.removeEventListener("mousemove", handleMouseMove)
        }
    }, [])

    return (
        <div
            style={{
                position: "fixed",
                top: position.y,
                left: position.x,
                pointerEvents: "none",
                transform: "translate(-50%, -50%)",
                zIndex: 1000,
            }}
        >
            {icon}
        </div>
    )
}