import { useState } from "react";

export const useSending = (callback) =>{
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const sending = async() => {
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

    return [sending, isLoading, error]
}