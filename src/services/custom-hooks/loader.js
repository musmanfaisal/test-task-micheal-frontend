import { useState } from "react"

export const useLoader = (initialState = false) => {
    const [loading, setLoading] = useState(initialState);
    return {
        on: () => setLoading(true),
        off: () => setLoading(false),
        loading
    }
}