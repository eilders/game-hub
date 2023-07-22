import { Heading } from "@chakra-ui/react";
import { GameQueryProps } from "../../App";

interface GameHeaderProps {
  gameQuery: GameQueryProps;
}

const GameHeader = (props: GameHeaderProps) => {
  const { gameQuery } = props;

  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;
  return (
    <Heading as="h1" marginY={5} fontSize={"5xl"}>
      {heading}
    </Heading>
  );
};
export default GameHeader;
