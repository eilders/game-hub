import useData from "./useData";

interface GenreProps {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => useData<GenreProps>("/genres");

export default useGenres;
