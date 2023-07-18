import { useEffect, useState } from "react";
import ApiClient from "../services/ApiClient";
import { CanceledError } from "axios";

export interface PlatformProps {
  id: number;
  name: string;
  slug: string;
}
export interface GameProps {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: PlatformProps }[];
  metacritic: number;
}

interface GamesResponseProps {
  count: number;
  results: GameProps[];
}

const useGames = () => {
  const [games, setGames] = useState<GameProps[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    ApiClient.get<GamesResponseProps>("/games", { signal: controller.signal })
      .then((res) => {
        setGames(res.data.results);
        setLoading(false);
      })
      .catch((e) => {
        if (e instanceof CanceledError) return;
        setError(e.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { games, error, isLoading };
};

export default useGames;
