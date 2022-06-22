import { useEffect, useState } from "react";
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
          try {
            let res = await fetch(url);
            let data = await res.json();
            setData(data);
            setIsPending(false);
          } catch (err) {
            setError(err.message);
          }
        }
        fetchData();
      }, [url]);

      return {data, isPending, error};
}
export default useFetch;