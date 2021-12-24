import { useState, useEffect } from "react";
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPrending, setpend] = useState(true);
    const [error, SetError] = useState(null);
    useEffect(() => {
        const abortCont = new AbortController();
        setTimeout(() => {
            fetch(url, { signal: abortCont.signal })
                .then(res => {
                    if (!res.ok) {
                        throw Error('Colud not fetch data');
                    }
                    return res.json();
                })
                .then(data => {
                    setData(data);
                    setpend(false);
                    SetError(null);

                })
                .catch(err => {
                    if (err.name === "AbortError") {
                        console.log("Abort Error")
                    } else {
                        setpend(false);
                        console.log(err.message);
                    }
                })
        }, 0)
        return () => abortCont.abort();
    }, [url]);
    return {
        data,
        isPrending,
        error
    }
}
export default useFetch;