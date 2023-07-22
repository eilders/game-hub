import { useEffect, useState } from "react";
import ApiClient from "../services/ApiClient";
import { AxiosRequestConfig, CanceledError } from "axios";

interface ResponseProps<T> {
  count: number;
  results: T[];
}

const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(
    () => {
      const controller = new AbortController();

      setLoading(true);
      ApiClient.get<ResponseProps<T>>(endpoint, {
        signal: controller.signal,
        ...requestConfig,
      })
        .then((res) => {
          setData(res.data.results);
          setLoading(false);
        })
        .catch((e) => {
          if (e instanceof CanceledError) return;
          setError(e.message);
          setLoading(false);
        });

      return () => controller.abort();
    },
    deps ? [...deps] : []
  );

  return { data, error, isLoading };
};

export default useData;
