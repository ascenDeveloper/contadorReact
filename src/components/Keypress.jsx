import { useEffect, useRef } from "react";

function useKey(key, cb) {
    const callbackRef = useRef(cb)


    useEffect(() => {
        callbackRef.current = cb
    })

    useEffect(() => {
        function handle(event) {
            if (event.isTrusted === true && event.key === key) {
                callbackRef.current(event)
            }
        }
        document.addEventListener('keydown', handle);
        return () => document.removeEventListener('keydown', handle)
    }, [key])
}

export default useKey;