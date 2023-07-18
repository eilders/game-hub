import { useEffect, useState } from "react";
import ApiClient from "../services/ApiClient";
import { CanceledError } from "axios";

interface GenreProps {
  id: number;
  name: string;
}

interface GenresResponseProps {
  count: number;
  results: GenreProps[];
}

const useGenres = () => {
  const [genres, setGenres] = useState<GenreProps[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    ApiClient.get<GenresResponseProps>("/genres", { signal: controller.signal })
      .then((res) => {
        setGenres(res.data.results);
        setLoading(false);
      })
      .catch((e) => {
        if (e instanceof CanceledError) return;
        setError(e.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { genres, error, isLoading };
};

export default useGenres;
