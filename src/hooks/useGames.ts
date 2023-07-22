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

const useGames = (
  selectedGenre: GenreProps | null,
  selectedPlatform: PlatformProps | null
) =>
  useData<GameProps>(
    "/games",
    { params: { genres: selectedGenre?.id, platforms: selectedPlatform?.id } },
    [selectedGenre?.id, selectedPlatform?.id]
  );

export default useGames;
