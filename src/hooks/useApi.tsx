import { useEffect, useState } from "react";
import { set } from "react-hook-form";

function useApi<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        setIsError(false);

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const json = await response.json();

        setData(json);
      } catch (error) {
        console.error("Error fetching data", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, [url]);

  return { data, isLoading, isError };
}

export default useApi;
