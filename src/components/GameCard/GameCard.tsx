import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { GameProps } from "../../hooks/useGames";

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
      </CardBody>
    </Card>
  );
};
export default GameCard;
