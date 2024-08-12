import { useState } from 'react';

const useModal = () => {
    const [isShowing, setIsShowing] = useState(false)

    function toggleShow() {
        setIsShowing(!isShowing)
    }

    return [isShowing, toggleShow]
}

export default useModal