import { useEffect, useState } from "react";

function useFetch(url) {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
            setIsPending(true);
            try {
                const request = await fetch(url);
                if (!request.ok) {
                    throw new Error('Something went wrong :(');
                }
                const response = await request.json();
                setData(response);
                setIsPending(false);
                setError(null);
            } catch (err) {
                console.log(err.message);
                setIsPending(false);
                setError(err.message);
            }
        };
        
        getData();
    }, [url]);

    return { data, isPending, error };
}

export default useFetch;
