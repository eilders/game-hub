import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar/NavBar";
import GameGrid from "./components/GameGrid/GameGrid";
import GenreList from "./components/GenreList/GenreList";
import { useState } from "react";
import { GenreProps } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector/PlatformSelector";
import { PlatformProps } from "./hooks/useGames";
import SortSelector from "./components/SortSelector/SortSelector";

export interface GameQueryProps {
  genre: GenreProps | null;
  platform: PlatformProps | null;
  sortOrder: string;
}

function App(props: GameQueryProps) {
  const { genre, platform } = props;
  const [gameQuery, setGameQuery] = useState<GameQueryProps>(
    {} as GameQueryProps
  );

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <HStack spacing={5} paddingLeft={2} marginBottom={5}>
          <PlatformSelector
            onSelectPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
            selectedPlatform={gameQuery.platform}
          />
          <SortSelector
            onSelectSortOrder={(sortOrder) =>
              setGameQuery({ ...gameQuery, sortOrder })
            }
            sortOrder={gameQuery.sortOrder}
          />
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
