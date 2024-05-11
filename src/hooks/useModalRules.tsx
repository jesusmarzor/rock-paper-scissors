import { useState } from "react"

const useModalRules = () => {
    const [isOpenedRules, setIsOpenedRules] = useState<boolean>(false)
    return {
        isOpenedRules,
        setIsOpenedRules
    }
}

export default useModalRules