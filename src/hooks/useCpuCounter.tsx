import { useEffect, useRef, useState } from "react"

const useCpuCounter = () => {
    const interval = useRef<NodeJS.Timeout>();
    const [counter, setCounter] = useState<number>(0)

    useEffect(() => {
        const handleTimer = () => {
            interval.current = setInterval( () => {
                setCounter((count) => count - 1);
            }, 1000);
        }

        if (counter <=  0 && interval.current) {
            clearInterval(interval.current);
        }
        if (counter === 3) {
            handleTimer();
        }
    }, [counter]);
    
    return {
        counter,
        setCounter
    }
}

export default useCpuCounter