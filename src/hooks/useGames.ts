import { GameQueryProps } from "../App";
import useData from "./useData";
import { GenreProps } from "./useGenres";

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

const useGames = (gameQuery: GameQueryProps) =>
  useData<GameProps>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
      },
    },
    [gameQuery]
  );

export default useGames;
