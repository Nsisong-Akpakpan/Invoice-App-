import React, {useState, useEffect} from 'react';
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    useEffect(()=>{
        
            
            fetch(url)
            .then(res => {
                // console.log(res);
                if(!res.ok){
                    throw Error("Could not fetch the data for that invoice");
                }
                return res.json();
            })
            .then(data => {
                // console.log(data);
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                // console.log(err.message);
                setIsPending(false);
                setError(err.message);
            })
        

    }, [url]); 

    return { data, isPending, error, setData }

}
export default useFetch;
// setTimeout(() => {}, 1000);