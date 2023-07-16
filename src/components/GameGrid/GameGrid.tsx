import { useEffect, useState } from "react";
import apiClient from "../../services/ApiClient";
import { Text } from "@chakra-ui/react";

interface GameProps {
  id: number;
  name: string;
}

interface GamesResponseProps {
  count: number;
  results: GameProps[];
}

const GameGrid = () => {
  const [games, setGames] = useState<GameProps[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<GamesResponseProps>("/games")
      .then((res) => setGames(res.data.results))
      .catch((e) => setError(e.message));
  });

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};
export default GameGrid;
