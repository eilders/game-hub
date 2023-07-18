import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import { GameProps } from "../../hooks/useGames";
import PlatformIconList from "../PlatformIconList/PlatformIconList";
import CriticScore from "../CriticScore/CriticScore";

interface GameCardProps {
  game: GameProps;
}

const GameCard = (props: GameCardProps) => {
  const { game } = props;

  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};
export default GameCard;
