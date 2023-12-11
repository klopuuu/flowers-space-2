import { useState } from "react";

export const useChangeData = (callback) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const changing = async() => {
        try{
            setIsLoading(true)
            await callback()
        }
        catch(e) {
            setError(e.message)
        }
        finally{
            setIsLoading(false)
        }
    }

    return [changing, isLoading, error]
}

