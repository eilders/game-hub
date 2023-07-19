import useData from "./useData";

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

const useGames = () => useData<GameProps>("/games");

export default useGames;
