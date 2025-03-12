import { useState, useEffect } from "react";

export default function useKeyPress(button) {
    const [isClicked, setIsClicked] = useState(false);

    const downHandler = ({ key }) => {
        if (key === button) {
            setIsClicked(true);
        }
    };

    const upHandler = ({ key }) => {
        if (key === button) {
            setIsClicked(false);
        }
    };

    useEffect(() => {
        window.addEventListener("keydown", downHandler);
        window.addEventListener("keyup", upHandler);

        return () => {
            window.removeEventListener("keydown", downHandler);
            window.removeEventListener("keyup", upHandler);
        };
    }, []);

    return isClicked;
}