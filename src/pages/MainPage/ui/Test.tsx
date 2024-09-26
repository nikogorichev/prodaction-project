import { useEffect, useState } from "react";

const useFetch = (url: string) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getData = async (url: string) => {
    setIsLoading(true);
    setIsError(false);

    try {
      const request = await fetch(url);
      const response = await request.json();
      setData(response);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData(url);
  }, [url]);

  return { data, isLoading, isError };
};
