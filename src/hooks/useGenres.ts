import useData from "./useData";

interface GenreProps {
  id: number;
  name: string;
}

const useGenres = () => useData<GenreProps>("/genres");

export default useGenres;
