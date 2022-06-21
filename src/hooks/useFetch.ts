import { useState, useEffect } from "react";

interface ApiResponseType<T> {
  data?: T;
  isPending: boolean;
  error?: string;
}

function useFetch<T = unknown>(url: string): ApiResponseType<T> {
  const [data, setData] = useState<T>();
  const [isPending, setIsPending] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  useEffect(() => {
    const abortCont = new AbortController();
    fetch(url, { signal: abortCont.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error("Fetch data failed");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsPending(false);
        setError("");
      })
      .catch((err) => {
        if (err.name === "Abort Error") {
          console.log("fetch aborted");
        } else {
          setIsPending(false);
          setError(err.message);
        }
      });
    return () => abortCont.abort();
  }, [url]);

  return { data, isPending, error };
}
export default useFetch;
