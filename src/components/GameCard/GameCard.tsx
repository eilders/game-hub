import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import { GameProps } from "../../hooks/useGames";
import PlatformIconList from "../PlatformIconList/PlatformIconList";
import CriticScore from "../CriticScore/CriticScore";
import getCroppedImageUrl from "../../services/ImageUrl";
import Emoji from "../Emoji/Emoji";

interface GameCardProps {
  game: GameProps;
}

const GameCard = (props: GameCardProps) => {
  const { game } = props;

  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">
          {game.name}
          <Emoji rating={game.rating_top} />
        </Heading>
      </CardBody>
    </Card>
  );
};
export default GameCard;
